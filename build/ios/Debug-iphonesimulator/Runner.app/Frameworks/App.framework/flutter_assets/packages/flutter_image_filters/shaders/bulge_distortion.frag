   IPLR           �     r���   `  �     �  #include <metal_stdlib>
#include <simd/simd.h>

using namespace metal;

struct bulge_distortion_fragment_main_out
{
    float4 fragColor [[color(0)]];
};

struct bulge_distortion_fragment_main_in
{
    float2 _fragCoord [[user(locn0)]];
};

fragment bulge_distortion_fragment_main_out bulge_distortion_fragment_main(bulge_distortion_fragment_main_in in [[stage_in]], constant float& inputAspectRatio [[buffer(0)]], constant float2& inputCenter [[buffer(1)]], constant float& inputRadius [[buffer(2)]], constant float& inputScale [[buffer(3)]], constant float2& screenSize [[buffer(4)]], texture2d<float> inputImageTexture [[texture(0)]], sampler inputImageTextureSmplr [[sampler(0)]])
{
    bulge_distortion_fragment_main_out out = {};
    float2 _24 = in._fragCoord / screenSize;
    float _48 = distance(inputCenter, float2(_24.x, fma(-0.5, inputAspectRatio, fma(_24.y, inputAspectRatio, 0.5))));
    float2 _95;
    if (_48 < inputRadius)
    {
        float _70 = fma(-((inputRadius - _48) / inputRadius), inputScale, 1.0);
        _95 = ((_24 - inputCenter) * (_70 * _70)) + inputCenter;
    }
    else
    {
        _95 = _24;
    }
    out.fragColor = inputImageTexture.sample(inputImageTextureSmplr, _95);
    return out;
}

      @  �   �   |   @      ����$                                
   screenSize   ���$                                
   inputScale  X���$                                   inputRadius H���(                                       inputCenter 8���                       inputImageTexture                                             inputAspectRatio       bulge_distortion_fragment_main                  �  �     �  // This SkSL shader is autogenerated by spirv-cross.

float4 flutter_FragCoord;

uniform float inputAspectRatio;
uniform vec2 inputCenter;
uniform float inputRadius;
uniform float inputScale;
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
    vec2 textureCoordinateToUse = vec2(textureCoordinate.x, ((textureCoordinate.y * inputAspectRatio) + 0.5) - (0.5 * inputAspectRatio));
    float dist = distance(inputCenter, textureCoordinateToUse);
    textureCoordinateToUse = textureCoordinate;
    if (dist < inputRadius)
    {
        textureCoordinateToUse -= inputCenter;
        float percent = 1.0 - (((inputRadius - dist) / inputRadius) * inputScale);
        percent *= percent;
        textureCoordinateToUse *= percent;
        textureCoordinateToUse += inputCenter;
    }
    fragColor = inputImageTexture.eval(inputImageTexture_size * ( textureCoordinateToUse));
}

half4 main(float2 iFragCoord)
{
      flutter_FragCoord = float4(iFragCoord, 0, 0);
      FLT_main();
      return fragColor;
}
     p  (  �   �   @      ����$                                
   screenSize  ����$                                
   inputScale   (            $                                   inputRadius  ,            (                                       inputCenter                                     inputImageTexture    $                                             inputAspectRatio       bulge_distortion_fragment_main  