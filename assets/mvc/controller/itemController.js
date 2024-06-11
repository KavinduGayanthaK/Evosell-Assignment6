import ItemModel from "../model/itemModel.js";
import {itemArray} from "../db/db.js";

let itemRecordIndex = undefined;
$('#add-item-btn').on('click', () => {
    $('#createItemBtn').text("CREATE NEW ITEM");
    $('#exampleModalLabel-item').text("Add a new Item");
});
$('#ItemCode').val('I00-000');
//create Item button action
$('#createItemBtn').on('click', () => {
    if ($('#createItemBtn').text() === "CREATE NEW ITEM") {
        let itemCode = $('#ItemCode').val();
        let itemName = $('#ItemName').val();
        let itemPrice = $('#ItemPrice').val();
        let itemQty = $('#ItemQty').val();

        let itemObj = new ItemModel(itemCode, itemName, itemPrice, itemQty);
        itemArray.push(itemObj);
        loadTableItem();
        clearItemFields();
        generateItemCode(itemCode)
    } else {
        let itemCode1 = $('#ItemCode').val();
        let itemName1 = $('#ItemName').val();
        let itemPrice1 = $('#ItemPrice').val();
        let itemQty1 = $('#ItemQty').val();

        clearItemUpdateFields();

        let itemObj1 = itemArray[itemRecordIndex];
        itemObj1.itemCode = itemCode1;
        itemObj1.itemName = itemName1;
        itemObj1.itemPrice = itemPrice1;
        itemObj1.itemQty = itemQty1;
        loadTableItem();
    }
});

//load all item in item table
function loadTableItem() {
    $('#item-table-body').empty();
    itemArray.map((item, index) => {
        let record = ` <tr>
                        <td class="item-id-value">${item.itemCode}</td>
                        <td class="item-name-value">${item.itemName}</td>
                        <td class="item-price-value">${item.itemPrice}</td>
                        <td class="item-qty-value">${item.itemQty}</td>
                        <td>
                            <button id="item-update-btn" data-bs-toggle="modal" data-bs-target="#exampleModal-item" >update</button>
                            <button id="item-delete-btn">delete</button>
                        </td>
                    </tr>`;
        $('#item-table-body').append(record);
    });
}

//clear item fields
function clearItemFields() {
    $('#ItemCode').val("");
    $('#ItemName').val("");
    $('#ItemPrice').val("");
    $('#ItemQty').val("");
}

//update button action in item table
$('#item-table-body').on('click', '#item-update-btn', function () {
    $('#createItemBtn').text("UPDATE ITEM");
    $('#exampleModalLabel-item').text("Update Item");
    itemRecordIndex = $(this).closest('tr').index();
    console.log(itemRecordIndex);
    let itemId = $(this).closest('tr').find('.item-id-value').text();
    let itemName = $(this).closest('tr').find('.item-name-value').text();
    let itemPrice = $(this).closest('tr').find('.item-price-value').text();
    let itemQty = $(this).closest('tr').find('.item-qty-value').text();

    $('#ItemCode').val(itemId);
    $('#ItemName').val(itemName);
    $('#ItemPrice').val(itemPrice);
    $('#ItemQty').val(itemQty);
});

//delete button action in item table
$('#item-table-body').on('click', '#item-delete-btn', function () {
    let recordIndexItem = $(this).closest('tr').index();
    itemArray.splice(recordIndexItem, 1);
    loadTableItem();
});

//update item fields clear
function clearItemUpdateFields() {
    $('#ItemCode-update').val("");
    $('#ItemName-update').val("");
    $('#ItemPrice-update').val("");
    $('#ItemQty-update').val("");
}

function generateItemCode(itemCode) {
    let split = itemCode.split("-");
    let split1 = +(split[1]) + 1;
    let newNumericPart = split1.toString().padStart(split[1].length, '0');
    let newItemCode = split[0] + "-" + newNumericPart;
    $('#ItemCode').val(newItemCode);
}

$(document).ready(function () {
    // $('#exampleModal-item').on('hidden.bs.modal', function () {
    //
    //     $('#itemForm')[0].reset();
    //     $('#itemForm .form-control').removeClass('is-valid is-invalid');
    // });
    //
    $('#createItemBtn').click(function (event) {
        event.preventDefault();

        $('#itemForm .form-control').removeClass('is-valid is-invalid');
    });
});

