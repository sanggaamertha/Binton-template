   IPLR              �  �     J���   �  �     �  #    o                 GLSL.std.450                     main       ^           G            H         #       H        #      H        #      H        #      H        #      G        G     "       G     !   A   G  ^          G  b   "       G  b   !   @        !                                        ;                                           ;                       +                       +     %          &         +     *      ?+     2      +     9        <   +     E     �?+     M        \            ]      \   ;  ]   ^       	 _                              `   _      a       `   ;  a   b       +     n      �6               �     =     h      A              =           �        h      Q     !          Q     $         A  &   '      %   =     (   '        +      2   $   (   *        /      2   n   (   +   P     0   !   /   A     3      2   =     4   3        6      C   4   0   A  &   :      9   =     ;   :   �  <   =   6   ;   �  ?       �  =   >   ?   �  >   �     C      4   �     I   ;   6   �     L   I   ;   A  &   N      M   =     O   N        m   L        Q      2   m   O   E   �     T   Q   Q   �     W   C   T   �     [   W   4   �  ?   �  ?   �     k         [   >   =  `   c   b   W  \   e   c   k   >  ^   e   �  8     �                           (         @                  1   _RESERVED_IDENTIFIER_FIXUP_gl_DefaultUniformBlock                                            inputImageTexture      bulge_distortion_fragment_main  "���   �  0     "  #version 100
precision mediump float;
precision highp int;

uniform highp vec2 screenSize;
uniform highp float inputAspectRatio;
uniform highp vec2 inputCenter;
uniform highp float inputRadius;
uniform highp float inputScale;
uniform highp sampler2D inputImageTexture;

varying highp vec2 _fragCoord;

void main()
{
    highp vec2 _24 = _fragCoord / screenSize;
    highp float _48 = distance(inputCenter, vec2(_24.x, (-0.5) * inputAspectRatio + (_24.y * inputAspectRatio + 0.5)));
    highp vec2 _95 = vec2(0.0);
    if (_48 < inputRadius)
    {
        highp float _70 = (-((inputRadius - _48) / inputRadius)) * inputScale + 1.0;
        _95 = ((_24 - inputCenter) * (_70 * _70)) + inputCenter;
    }
    else
    {
        _95 = _24;
    }
    gl_FragData[0] = texture2D(inputImageTexture, _95);
}

     @  �   �   |   @      ����$                                
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