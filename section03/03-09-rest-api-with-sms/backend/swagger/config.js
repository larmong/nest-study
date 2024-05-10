export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: "테스트 API 설명서",
      version: "1.0.0"
    },
  },
  apis: ["./swagger/*.swagger.js"],
}