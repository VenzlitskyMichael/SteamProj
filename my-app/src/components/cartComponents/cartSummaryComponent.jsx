export function CartSummary({ total, taxPercent }) {
    return (
        <div id="totalTaxDiv">
            <div id="totalDiv">
                <p id="totalP">Total:</p>
                <p id="UAHP">{total} UAH</p>
            </div>
            <div id="taxDiv">
                <p className="taxprecentP">Tax:</p>
                <p className="taxprecentP">{taxPercent}%</p>
            </div>
            <p id="textTaxP">
                Of their respective owners in the US and other countries. VAT included in all prices where applicable
            </p>
            <button id="checkOutButton">Check Out</button>
        </div>
    );
}
