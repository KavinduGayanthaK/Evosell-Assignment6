
import ItemModel from "../model/itemModel.js";
import {itemArray} from "../db/db.js";

let itemRecordIndex = undefined;
$('#createItemBtn').on('click', () => {
    let itemCode = $('#ItemCode').val();
    let itemName = $('#ItemName').val();
    let itemPrice = $('#ItemPrice').val();
    let itemQty = $('#ItemQty').val();

    let itemObj = new ItemModel(itemCode, itemName, itemPrice, itemQty);
    itemArray.push(itemObj);
    loadTableItem();
    clearItemFields();

});

function loadTableItem() {
    $('#item-table-body').empty();
    itemArray.map((item, index) => {
        let record = ` <tr>
                        <td class="item-id-value">${item.itemCode}</td>
                        <td class="item-name-value">${item.itemName}</td>
                        <td class="item-price-value">${item.itemPrice}</td>
                        <td class="item-qty-value">${item.itemQty}</td>
                        <td>
                            <button id="item-update-btn" data-bs-toggle="modal" data-bs-target="#exampleModal1" >update</button>
                            <button id="item-delete-btn">delete</button>
                        </td>
                    </tr>`;
        $('#item-table-body').append(record);
    });
}

function clearItemFields() {
    $('#ItemCode').val("");
    $('#ItemName').val("");
    $('#ItemPrice').val("");
    $('#ItemQty').val("");
}

$('#item-table-body').on('click', '#item-update-btn', function () {
    itemRecordIndex = $(this).closest('tr').index();
    let itemId = $(this).closest('tr').find('.item-id-value').text();
    let itemName = $(this).closest('tr').find('.item-name-value').text();
    let itemPrice = $(this).closest('tr').find('.item-price-value').text();
    let itemQty = $(this).closest('tr').find('.item-qty-value').text();

    $('#ItemCode-update').val(itemId);
    $('#ItemName-update').val(itemName);
    $('#ItemPrice-update').val(itemPrice);
    $('#ItemQty-update').val(itemQty);
});

$('#item-table-body').on('click', '#item-delete-btn', function () {
    let recordIndexItem = $(this).closest('tr').index();
    itemArray.splice(recordIndexItem, 1);
    loadTableItem();
});

$('#update-item-btn').on('click', () => {
    let itemCode = $('#ItemCode-update').val();
    let itemName = $('#ItemName-update').val();
    let itemPrice = $('#ItemPrice-update').val();
    let itemQty = $('#ItemQty-update').val();

    clearItemUpdateFields();

    let itemObj = itemArray[itemRecordIndex];
    itemObj.itemId = itemCode;
    itemObj.itemName = itemName;
    itemObj.itemPrice = itemPrice;
    itemObj.itemQty = itemQty;
    loadTableItem();
});

function clearItemUpdateFields() {
    $('#ItemCode-update').val("");
    $('#ItemName-update').val("");
    $('#ItemPrice-update').val("");
    $('#ItemQty-update').val("");
}