import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginOptions,
} from "fastify";
import { CreateNutritionController } from "./modules/nutrition/controller/CreateNutritionController";

const createNutritionController = new CreateNutritionController();

export async function routes(
  fastify: FastifyInstance,
  option: FastifyPluginOptions
) {
  fastify.get("/test", (req: FastifyRequest, reply: FastifyReply) => {
    let responseText =
      '```json\n{\n  "nome": "Luan",\n  "sexo": "masculino",\n  "idade": 26,\n  "altura": "undefined",\n  "peso": 82,\n  "objetivo": "hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "07:00",\n      "nome": "Café da manhã",\n      "alimentos": [\n        "2 fatias de pão integral",\n        "2 ovos mexidos com queijo",\n        "1 banana",\n        "1 copo de leite desnatado"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da manhã",\n        "alimentos": [\n          "1 iogurte grego com granola"\n        ]\n    },\n    {\n      "horario": "13:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis",\n        "Salada de folhas verdes com tomate e azeite"\n      ]\n    },\n    {\n      "horario": "16:00",\n      "nome": "Lanche da tarde",\n      "alimentos": [\n        "1 batata doce média",\n        "1 scoop de whey protein"\n      ]\n    },\n    {\n      "horario": "19:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de carne vermelha magra",\n        "1 xícara de batata doce cozida",\n        "1 xícara de espinafre"\n      ]\n    },\n    {\n      "horario": "21:00",\n      "nome": "Lanche antes de dormir",\n      "alimentos": [\n        "1 scoop de caseína"\n      ]\n    }\n  ],\n  "suplementos": [\n    "whey protein",\n    "creatina",\n```  ';

    try {
      let jsonString = responseText
        .replace(/```\w*\n/g, "")
        .replace(/\```/g, "")
        .trim();
      let result = JSON.parse(jsonString);
      return reply.send({ data: result });
    } catch (err) {}
  });

  fastify.post("/create", async (req: FastifyRequest, reply: FastifyReply) => {
    return new CreateNutritionController().handle(req, reply);
  });
}
