   IPLR       �	     j���   p	  \     P  #pragma clang diagnostic ignored "-Wmissing-prototypes"

#include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

// Implementation of the GLSL mod() function, which is slightly different than Metal fmod()
template<typename Tx, typename Ty>
inline Tx mod(Tx x, Ty y)
{
    return x - y * floor(x / y);
}

struct crosshatch_fragment_main_out
{
    float4 fragColor [[color(0)]];
};

struct crosshatch_fragment_main_in
{
    float2 _fragCoord [[user(locn0)]];
};

fragment crosshatch_fragment_main_out crosshatch_fragment_main(crosshatch_fragment_main_in in [[stage_in]], constant float& inputCrossHatchSpacing [[buffer(0)]], constant float& inputLineWidth [[buffer(1)]], constant float2& screenSize [[buffer(2)]], texture2d<float> inputImageTexture [[texture(0)]], sampler inputImageTextureSmplr [[sampler(0)]])
{
    crosshatch_fragment_main_out out = {};
    float2 _24 = in._fragCoord / screenSize;
    float4 _34 = inputImageTexture.sample(inputImageTextureSmplr, _24);
    float _41 = dot(_34.xyz, float3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
    float4 _142;
    if (_41 < 1.0)
    {
        _142 = select(float4(1.0), float4(0.0, 0.0, 0.0, 1.0), bool4(mod(_24.x + _24.y, inputCrossHatchSpacing) <= inputLineWidth));
    }
    else
    {
        _142 = float4(1.0);
    }
    float4 _141;
    if (_41 < 0.75)
    {
        _141 = select(_142, float4(0.0, 0.0, 0.0, 1.0), bool4(mod(_24.x - _24.y, inputCrossHatchSpacing) <= inputLineWidth));
    }
    else
    {
        _141 = _142;
    }
    float4 _140;
    if (_41 < 0.5)
    {
        _140 = select(_141, float4(0.0, 0.0, 0.0, 1.0), bool4(mod(fma(-inputCrossHatchSpacing, 0.5, _24.x + _24.y), inputCrossHatchSpacing) <= inputLineWidth));
    }
    else
    {
        _140 = _141;
    }
    float4 _139;
    if (_41 < 0.300000011920928955078125)
    {
        _139 = select(_140, float4(0.0, 0.0, 0.0, 1.0), bool4(mod(fma(-inputCrossHatchSpacing, 0.5, _24.x - _24.y), inputCrossHatchSpacing) <= inputLineWidth));
    }
    else
    {
        _139 = _140;
    }
    out.fragColor = _139;
    return out;
}

   �   �   @      ����$                                
   screenSize  ����(                                       inputLineWidth  ����                            inputCrossHatchSpacing                                           inputImageTexture      crosshatch_fragment_main                H       �  // This SkSL shader is autogenerated by spirv-cross.

float4 flutter_FragCoord;

uniform float inputCrossHatchSpacing;
uniform float inputLineWidth;
uniform vec2 screenSize;
uniform shader inputImageTexture;
uniform half2 inputImageTexture_size;

vec4 fragColor;

vec2 FLT_flutter_local_FlutterFragCoord()
{
    return flutter_FragCoord.xy;
}

void FLT_main()
{
    vec2 textureCoordinate = FLT_flutter_local_FlutterFragCoord() / screenSize;
    float luminance = dot(inputImageTexture.eval(inputImageTexture_size * ( textureCoordinate)).xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
    vec4 colorToDisplay = vec4(1.0);
    if (luminance < 1.0)
    {
        if (mod(textureCoordinate.x + textureCoordinate.y, inputCrossHatchSpacing) <= inputLineWidth)
        {
            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
    if (luminance < 0.75)
    {
        if (mod(textureCoordinate.x - textureCoordinate.y, inputCrossHatchSpacing) <= inputLineWidth)
        {
            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
    if (luminance < 0.5)
    {
        if (mod((textureCoordinate.x + textureCoordinate.y) - (inputCrossHatchSpacing / 2.0), inputCrossHatchSpacing) <= inputLineWidth)
        {
            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
    if (luminance < 0.300000011920928955078125)
    {
        if (mod((textureCoordinate.x - textureCoordinate.y) - (inputCrossHatchSpacing / 2.0), inputCrossHatchSpacing) <= inputLineWidth)
        {
            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
    fragColor = colorToDisplay;
}

half4 main(float2 iFragCoord)
{
      flutter_FragCoord = float4(iFragCoord, 0, 0);
      FLT_main();
      return fragColor;
}
        �   `       (            $                                
   screenSize   ,            (                                       inputLineWidth                                            inputCrossHatchSpacing                                      inputImageTexture      crosshatch_fragment_main    