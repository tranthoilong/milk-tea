import React from 'react';
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";

type CardProps = React.ComponentProps<typeof Card>

interface ProductProps {
    id: number,
    name: string,
    price: number,
    size: string,
    image: string,
    description: string,
}

const ProductItem = ({ className, ...props }: CardProps ) => {
    return (
        <Card className={cn("", className)} {...props}>
            <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
        </Card>
        );
};

export default ProductItem;