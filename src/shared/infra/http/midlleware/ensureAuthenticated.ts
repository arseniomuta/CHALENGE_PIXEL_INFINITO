import {Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

  const authHeader = request.headers.authorization

  if(!authHeader){
    return response.status(401).json({
      error: "Token is missing"
    })
  }

  const [, token] = authHeader.split(" ")

  try{
    const {sub: user_id} = verify(token, process.env.JWT_SECRET as string) as IPayload
    request.user = {
        id: user_id
    }
    next()
}catch(err){
   return response.status(401).json({
      error: "Invalid token"
   })
}
}