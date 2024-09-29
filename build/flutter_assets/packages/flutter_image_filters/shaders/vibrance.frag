{
  "sksl": {
    "entrypoint": "vibrance_fragment_main",
    "shader": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform float inputVibrance;\nuniform vec2 screenSize;\nuniform shader inputImageTexture;\nuniform half2 inputImageTexture_size;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nvec4 FLT_flutter_local_processColor(inout vec4 sourceColor)\n{\n    float average = ((sourceColor.x + sourceColor.y) + sourceColor.z) / 3.0;\n    float mx = max(sourceColor.x, max(sourceColor.y, sourceColor.z));\n    float amt = (mx - average) * ((-inputVibrance) * 3.0);\n    vec4 _61 = sourceColor;\n    vec3 _67 = mix(_61.xyz, vec3(mx), vec3(amt));\n    sourceColor.x = _67.x;\n    sourceColor.y = _67.y;\n    sourceColor.z = _67.z;\n    return sourceColor;\n}\n\nvoid FLT_main()\n{\n    vec2 textureCoordinate = FLT_flutter_local_FlutterFragCoord() / screenSize;\n    vec4 textureColor = inputImageTexture.eval(inputImageTexture_size * ( textureCoordinate));\n    vec4 param = textureColor;\n    vec4 _96 = FLT_flutter_local_processColor(param);\n    fragColor = _96;\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
    "stage": 1,
    "uniforms": [
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 0,
        "name": "inputVibrance",
        "rows": 1,
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
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 1,
        "name": "screenSize",
        "rows": 2,
        "type": 10
      }
    ]
  }
}