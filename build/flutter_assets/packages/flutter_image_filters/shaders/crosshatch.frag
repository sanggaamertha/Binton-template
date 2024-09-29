{
  "sksl": {
    "entrypoint": "crosshatch_fragment_main",
    "shader": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform float inputCrossHatchSpacing;\nuniform float inputLineWidth;\nuniform vec2 screenSize;\nuniform shader inputImageTexture;\nuniform half2 inputImageTexture_size;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nvoid FLT_main()\n{\n    vec2 textureCoordinate = FLT_flutter_local_FlutterFragCoord() / screenSize;\n    float luminance = dot(inputImageTexture.eval(inputImageTexture_size * ( textureCoordinate)).xyz, vec3(0.2125000059604644775390625, 0.7153999805450439453125, 0.07209999859333038330078125));\n    vec4 colorToDisplay = vec4(1.0);\n    if (luminance < 1.0)\n    {\n        if (mod(textureCoordinate.x + textureCoordinate.y, inputCrossHatchSpacing) <= inputLineWidth)\n        {\n            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n    if (luminance < 0.75)\n    {\n        if (mod(textureCoordinate.x - textureCoordinate.y, inputCrossHatchSpacing) <= inputLineWidth)\n        {\n            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n    if (luminance < 0.5)\n    {\n        if (mod((textureCoordinate.x + textureCoordinate.y) - (inputCrossHatchSpacing / 2.0), inputCrossHatchSpacing) <= inputLineWidth)\n        {\n            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n    if (luminance < 0.300000011920928955078125)\n    {\n        if (mod((textureCoordinate.x - textureCoordinate.y) - (inputCrossHatchSpacing / 2.0), inputCrossHatchSpacing) <= inputLineWidth)\n        {\n            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n    fragColor = colorToDisplay;\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
    "stage": 1,
    "uniforms": [
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
        "location": 0,
        "name": "inputCrossHatchSpacing",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 1,
        "name": "inputLineWidth",
        "rows": 1,
        "type": 10
      },
      {
        "array_elements": 0,
        "bit_width": 32,
        "columns": 1,
        "location": 2,
        "name": "screenSize",
        "rows": 2,
        "type": 10
      }
    ]
  }
}