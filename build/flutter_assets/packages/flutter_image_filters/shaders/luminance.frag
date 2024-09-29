{
  "sksl": {
    "entrypoint": "luminance_fragment_main",
    "shader": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform vec2 screenSize;\nuniform shader inputImageTexture;\nuniform half2 inputImageTexture_size;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nvec4 FLT_flutter_local_processColor(vec4 sourceColor)\n{\n    float luminance = dot(sourceColor.xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));\n    return vec4(vec3(luminance), sourceColor.w);\n}\n\nvoid FLT_main()\n{\n    vec2 textureCoordinate = FLT_flutter_local_FlutterFragCoord() / screenSize;\n    vec4 textureColor = inputImageTexture.eval(inputImageTexture_size * ( textureCoordinate));\n    vec4 param = textureColor;\n    fragColor = FLT_flutter_local_processColor(param);\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
    "stage": 1,
    "uniforms": [
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 0,
        "name": "screenSize",
        "rows": 2,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 0,
        "columns": 1,
        "location": 0,
        "name": "inputImageTexture",
        "rows": 1,
        "type": 12
      }
    ]
  }
}