import { Request, Response } from "express";

export const getProducts = (req: Request, res: Response) => {
    res.json({
        data: [
            {
                id: 1,
                name: "Product 1"
            },
            {
                id: 2,
                name: "Product 2"
            },
            {
                id: 3,
                name: "Product 3"
            }
        ]
    });
}