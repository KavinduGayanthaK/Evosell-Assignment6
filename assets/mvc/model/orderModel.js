import {customerArray, orderArray} from "../db/db.js";
import {cartArray} from "../db/db.js";
import {itemArray} from "../db/db.js";
import CartModel from "../model/cartModel.js";

$("#item-code-order").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        let itemCode = $('#item-code-order').val();
        for (let i = 0; i < itemArray.length; i++) {
            if (itemCode === itemArray[i].itemCode) {
                $('#item-name-order').val(itemArray[i].itemName);
                $('#item-price-order').val(itemArray[i].itemPrice);
            }
        }
    }
});

//add Item
$('#create-itembtn-order').on('click', () => {
    let itemCode = $('#item-code-order').val();
    let itemName = $('#item-name-order').val();
    let itemPrice = $('#item-price-order').val();
    let itemQty = $('#item-qty-order').val();
    let total = itemPrice * itemQty;

    let cartObj = new CartModel(itemCode, itemName, itemPrice, itemQty, total);
    cartArray.push(cartObj);
    clearCreateItemFields();
    loadTableCart();
})

function clearCreateItemFields() {
    $('#item-code-order').val("");
    $('#item-name-order').val("");
    $('#item-price-order').val("");
    $('#item-qty-order').val("");
}

function loadTableCart() {
    $('#cart-table-body').empty();
    cartArray.map((item, index) => {
        let record = ` <tr>
                        <td class="item-code-value">${item.itemCode}</td>
                        <td class="item-name-value">${item.itemName}</td>
                        <td class="item-price-value">${item.itemPrice}</td>
                        <td class="item-qty-value">${item.itemQty}</td>
                        <td class="total-value">${item.total}</td>
                        <td>
                            <button id="remove-btn" >remove</button>
                       
                        </td>
                    </tr>`;
        $('#cart-table-body').append(record);
    });
}

$('#cart-table-body').on('click', '#remove-btn', function () {
    let recordIndexCart = $(this).closest('tr').index();
    cartArray.splice(recordIndexCart, 1);
    loadTableCart();
});

$("#customerNic-order").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        let customerNic = $('#customerNic-order').val();
        for (let i = 0; i < customerArray.length; i++) {
            if (customerNic === customerArray[i].customerNic) {
                $('#customerName-order').val(customerArray[i].customerName);
            }
        }
    }
});

$(document).ready(function() {
    // Create a new Date object to get the current date and time
    let date = new Date();

    // Format the date as yyyy-mm-dd for compatibility with HTML date input
    let formattedDate = date.toISOString().slice(0, 10);

    // Set the formatted date as the value of the date field with id 'date'
    $('#date').val(formattedDate);
});
