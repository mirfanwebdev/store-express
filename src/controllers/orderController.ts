import { Request, Response } from "express";

export const getOrderList = (req: Request, res: Response) => {
    res.json({
        data: [
            {
                id: 1,
                user_id: 1,
                product_id: 1
            },
            {
                id: 2,
                user_id: 2,
                product_id: 2
            },
            {
                id: 3,
                user_id: 3,
                product_id: 3
            }
        ]
    })
}