import React from 'react';
import { useBarcode } from 'react-barcodes';

export default function BarCode(props){

    const { inputRef } = useBarcode({
        value: props.productCode,
        options: {
            background: '#ffff00',
        }
    });

    return <div><img ref={inputRef} /></div>
}