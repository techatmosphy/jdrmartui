import React, { useState } from 'react';
import { useBarcode } from 'react-barcodes';
import BarcodeReader from 'react-barcode-reader';
import { useReactToPrint } from 'react-to-print';
import ReactToPrint from 'react-to-print';


export function BarCodeGenerator(props) {

    const { inputRef } = useBarcode({
        value: props.productCode,
        options: {
            background: '#ffff00',
        }
    })

    const componentRef = useRef();
    const updateRef = () => {
        props.updateInputRef(inputRef)
        console.log("*****",inputRef)
    }

    return (<div>
        <img ref={inputRef} onClick={updateRef}/>
        <div>
                            <ReactToPrint
                                trigger={() => <button>Print this out!</button>}
                                content={() => componentRef.current}
                            />
                            <ComponentToPrint ref={componentRef} />
                        </div>
        <button>Print</button>
        </div>)
}

export function BarCodeReader(props) {
    const [barCode, setBarCode] = useState('')

    const handleScan = (data) => {
        console.log("handleScan ::",data)
        setBarCode(data)
        props.updateBarCode(data)
    }

    const handleError = (data) => {
        console.log("handleError ::",data)
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
const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>skdjslkfd</div>
    );
});
