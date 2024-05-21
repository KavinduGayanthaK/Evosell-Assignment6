import {customerArray, orderArray} from "../db/db.js";
import {cartArray} from "../db/db.js";
import {itemArray} from "../db/db.js";
import CartModel from "../model/cartModel.js";
import OrderModel from "../model/orderModel.js";

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

//item fields clear
function clearCreateItemFields() {
    $('#item-code-order').val("").removeClass('is-valid is-invalid');;
    $('#item-name-order').val("").removeClass('is-valid is-invalid');;
    $('#item-price-order').val("").removeClass('is-valid is-invalid');;
    $('#item-qty-order').val("").removeClass('is-valid is-invalid');;
}

//add data cart table
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

    let total = 0;
    for (let i = 0; i < cartArray.length; i++) {

        total += cartArray[i].total;
    }
    $('#total-label').text(total);
    $('#net-total-label').text(total);
}

//cart table remove button action
$('#cart-table-body').on('click', '#remove-btn', function () {
    let recordIndexCart = $(this).closest('tr').index();
    cartArray.splice(recordIndexCart, 1);
    loadTableCart();
});

//select customer action
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



//set date
$(document).ready(function () {
    let date = new Date();
    let formattedDate = date.toISOString().slice(0, 10);
    $('#date').val(formattedDate);
    $('#order-id').val(10001);

});


