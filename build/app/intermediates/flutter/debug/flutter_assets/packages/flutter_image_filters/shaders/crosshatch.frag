   IPLR          8       ����   �
  $
     
  #    �                 GLSL.std.450                     main       �           G            H         #       H        #      H        #      G        G     "       G     !   A   G  !   "       G  !   !   @   G  �          G  +       G  �       G  �       G  �       G  �       G  �       G  �       G  �       G  �            !                                        ;                                     ;                       +                        	                                                   ;      !         $           &         +     (   ��Y>+     )   t$7?+     *   *��=,  &   +   (   )   *   +     /     �?,  $   0   /   /   /   /     2   +     >          ?         +     C      +     I       ,  $   J   I   I   I   /   +     L     @?+     ^      ?+     u   ���>   �      $   ;  �   �        �   2      6               �     =     �      A              =           �        �      =     "   !   W  $   %   "      O  &   '   %   %             �     ,   '   +   �  2   3   ,   /   �  5       �  3   4   5   �  4   Q     9          Q     <         �     =   9   <   A  ?   @      >   =     A   @   �     B   =   A   A  ?   D      C   =     E   D   �  2   F   B   E   P  �   �   F   F   F   F   �  $   �   �   J   0   �  5   �  5   �  $   �   0      �   4   �  2   M   ,   L   �  O       �  M   N   O   �  N   Q     Q          Q     S         �     T   Q   S   A  ?   U      >   =     V   U   �     W   T   V   A  ?   X      C   =     Y   X   �  2   Z   W   Y   P  �   �   Z   Z   Z   Z   �  $   �   �   J   �   �  O   �  O   �  $   �   �   5   �   N   �  2   _   ,   ^   �  a       �  _   `   a   �  `   Q     c          Q     e         �     f   c   e   A  ?   g      >   =     h   g        �   h        k      2   �   ^   f   �     n   k   h   A  ?   o      C   =     p   o   �  2   q   n   p   P  �   �   q   q   q   q   �  $   �   �   J   �   �  a   �  a   �  $   �   �   O   �   `   �  2   v   ,   u   �  x       �  v   w   x   �  w   Q     z          Q     |         �     }   z   |   A  ?   ~      >   =        ~        �           �      2   �   ^   }   �     �   �      A  ?   �      C   =     �   �   �  2   �   �   �   P  �   �   �   �   �   �   �  $   �   �   J   �   �  x   �  x   �  $   �   �   a   �   w   >  �   �   �  8     �         $                 (         @                     1   _RESERVED_IDENTIFIER_FIXUP_gl_DefaultUniformBlock    ���                           inputImageTexture      crosshatch_fragment_main    ����   �	  �     �  #version 100
precision mediump float;
precision highp int;

uniform highp vec2 screenSize;
uniform highp sampler2D inputImageTexture;
uniform highp float inputCrossHatchSpacing;
uniform highp float inputLineWidth;

varying highp vec2 _fragCoord;

void main()
{
    highp vec2 _24 = _fragCoord / screenSize;
    highp vec4 _34 = texture2D(inputImageTexture, _24);
    highp float _41 = dot(_34.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));
    highp vec4 _142 = vec4(0.0);
    if (_41 < 1.0)
    {
        bvec4 _150 = bvec4(mod(_24.x + _24.y, inputCrossHatchSpacing) <= inputLineWidth);
        _142 = vec4(_150.x ? vec4(0.0, 0.0, 0.0, 1.0).x : vec4(1.0).x, _150.y ? vec4(0.0, 0.0, 0.0, 1.0).y : vec4(1.0).y, _150.z ? vec4(0.0, 0.0, 0.0, 1.0).z : vec4(1.0).z, _150.w ? vec4(0.0, 0.0, 0.0, 1.0).w : vec4(1.0).w);
    }
    else
    {
        _142 = vec4(1.0);
    }
    highp vec4 _141 = vec4(0.0);
    if (_41 < 0.75)
    {
        bvec4 _152 = bvec4(mod(_24.x - _24.y, inputCrossHatchSpacing) <= inputLineWidth);
        _141 = vec4(_152.x ? vec4(0.0, 0.0, 0.0, 1.0).x : _142.x, _152.y ? vec4(0.0, 0.0, 0.0, 1.0).y : _142.y, _152.z ? vec4(0.0, 0.0, 0.0, 1.0).z : _142.z, _152.w ? vec4(0.0, 0.0, 0.0, 1.0).w : _142.w);
    }
    else
    {
        _141 = _142;
    }
    highp vec4 _140 = vec4(0.0);
    if (_41 < 0.5)
    {
        bvec4 _154 = bvec4(mod((-inputCrossHatchSpacing) * 0.5 + (_24.x + _24.y), inputCrossHatchSpacing) <= inputLineWidth);
        _140 = vec4(_154.x ? vec4(0.0, 0.0, 0.0, 1.0).x : _141.x, _154.y ? vec4(0.0, 0.0, 0.0, 1.0).y : _141.y, _154.z ? vec4(0.0, 0.0, 0.0, 1.0).z : _141.z, _154.w ? vec4(0.0, 0.0, 0.0, 1.0).w : _141.w);
    }
    else
    {
        _140 = _141;
    }
    highp vec4 _139 = vec4(0.0);
    if (_41 < 0.300000011920928955078125)
    {
        bvec4 _156 = bvec4(mod((-inputCrossHatchSpacing) * 0.5 + (_24.x - _24.y), inputCrossHatchSpacing) <= inputLineWidth);
        _139 = vec4(_156.x ? vec4(0.0, 0.0, 0.0, 1.0).x : _140.x, _156.y ? vec4(0.0, 0.0, 0.0, 1.0).y : _140.y, _156.z ? vec4(0.0, 0.0, 0.0, 1.0).z : _140.z, _156.w ? vec4(0.0, 0.0, 0.0, 1.0).w : _140.w);
    }
    else
    {
        _139 = _140;
    }
    gl_FragData[0] = _139;
}

      �   �   @      ����$                                
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