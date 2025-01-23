import { FastifyReply, FastifyRequest } from "fastify";
import { CreateNutritionService } from "../service/CreateNutritionService";

export interface DataProps {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  objective: string;
  level: string;
}
export class CreateNutritionController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, weight, height, age, gender, objective, level } =
      request.body as DataProps;
    try {
      const createNutrition = new CreateNutritionService();

      const create = await createNutrition.execute({
        name,
        weight,
        height,
        age,
        gender,
        objective,
        level,
      });
      reply.send(create);
    } catch (error) {
      return reply.code(500).send({ error });
    }
  }
}
