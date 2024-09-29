{
  "sksl": {
    "entrypoint": "swirl_fragment_main",
    "shader": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform vec2 inputCenter;\nuniform float inputRadius;\nuniform float inputAngle;\nuniform vec2 screenSize;\nuniform shader inputImageTexture;\nuniform half2 inputImageTexture_size;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nvoid FLT_main()\n{\n    vec2 textureCoordinate = FLT_flutter_local_FlutterFragCoord() / screenSize;\n    vec2 textureCoordinateToUse = textureCoordinate;\n    float dist = distance(inputCenter, textureCoordinate);\n    if (dist < inputRadius)\n    {\n        textureCoordinateToUse -= inputCenter;\n        float percent = (inputRadius - dist) / inputRadius;\n        float theta = ((percent * percent) * inputAngle) * 8.0;\n        float s = sin(theta);\n        float c = cos(theta);\n        textureCoordinateToUse = vec2(dot(textureCoordinateToUse, vec2(c, -s)), dot(textureCoordinateToUse, vec2(s, c)));\n        textureCoordinateToUse += inputCenter;\n    }\n    fragColor = inputImageTexture.eval(inputImageTexture_size * ( textureCoordinateToUse));\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
    "stage": 1,
    "uniforms": [
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 0,
        "name": "inputCenter",
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
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 1,
        "name": "inputRadius",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 2,
        "name": "inputAngle",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 3,
        "name": "screenSize",
        "rows": 2,
        "type": 10
      }
    ]
  }
}