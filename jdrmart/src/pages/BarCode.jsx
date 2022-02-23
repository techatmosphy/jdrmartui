import React, { useRef, useState } from 'react';
import { useBarcode } from 'react-barcodes';
import BarcodeReader from 'react-barcode-reader'
import ReactToPrint from "react-to-print";
//import { ComponentToPrint } from './ComponentToPrint22';
import { saveAs } from 'file-saver'

export function BarCodeGenerator1(props) {

    const { inputRef } = useBarcode({
        value: props.productCode,
        options: {
            background: '#ffff00',
        }
    });

    const componentRef = useRef();
    
    const handleEvent = (e) => {
        console.log("event : ",e.target)
    }
    return <div>
        <svg ref={inputRef} onClick={(e) => handleEvent(e)}/>

    </div>
}

export function BarCodeReader(props) {
    const [barCode, setBarCode] = useState('')

    const handleScan = (data) => {
        console.log("handleScan ::", data)
        setBarCode(data)
        props.updateBarCode(data)
    }

    const handleError = (data) => {
        console.log("handleError ::", data)
        setBarCode(data)
        props.updateBarCode(data)
    }

    return (<div>
        <BarcodeReader
            onError={handleError}
            onScan={handleScan}
        />
        <h1>Barcode</h1>
        <p>{this.state.result}</p>

    </div>)
}