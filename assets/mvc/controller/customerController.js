
import CustomerModel from "../model/customerModel.js";
import {customerArray} from "../db/db.js";



$('#create-customer').on('click', () => {
    let customerId = $('#customerId').val();
    let customerName = $('#customerName').val();
    let customerAddress = $('#customerAddress').val();
    let customerEmail = $('#customerEmail').val();
    let customerNic = $('#customerNic').val();

    let customerObj = new CustomerModel(customerId, customerName, customerAddress, customerEmail, customerNic);
    clearFieldsCustomer();
    //object add to array
    customerArray.push(customerObj);
    loadCustomerTable();

})
let customerRecordIndex = undefined;

//data load to table
function loadCustomerTable() {
    //table body empty
    $('#customer-table-body').empty();
    customerArray.forEach((item, index) => {
        let record = `<tr>
            <td class="customerId-value">${item.customerID}</td>
            <td class="customerName-value">${item.customerName}</td>
            <td class="customerAddress-value">${item.customerAddress}</td>
            <td class="customerEmail-value">${item.customerEmail}</td>
            <td class="customerNic-value">${item.customerNic}</td>      
            <td>
                <button id="customer-update-btn" data-bs-toggle="modal" data-bs-target="#exampleModal-update">update</button>
                <button type="button" id="customer-delete-btn" >delete</button>
            </td>
        </tr>`;
        $('#customer-table-body').append(record);
    });
}


//fields clear
function clearFieldsCustomer() {
    $('#customerId').val("");
    $('#customerName').val("");
    $('#customerAddress').val("");
    $('#customerEmail').val("");
    $('#customerNic').val("");
}

$('#customer-table-body').on('click','#customer-update-btn',function(){
    customerRecordIndex = $(this).closest('tr').index();
    let customerId = $(this).closest('tr').find('.customerId-value').text();
    let customerName = $(this).closest('tr').find('.customerName-value').text();
    let customerAddress = $(this).closest('tr').find('.customerAddress-value').text();
    let customerEmail = $(this).closest('tr').find('.customerEmail-value').text();
    let customerNic = $(this).closest('tr').find('.customerNic-value').text();

    $('#customerId-update').val(customerId);
    $('#customerName-update').val(customerName);
    $('#customerAddress-update').val(customerAddress);
    $('#customerEmail-update').val(customerEmail);
    $('#customerNic-update').val(customerNic);
});


$('#customer-table-body').on('click', '#customer-delete-btn', function() {
    let recordIndex1 = $(this).closest('tr').index();
    customerArray.splice(recordIndex1, 1);
    loadCustomerTable();
});

$('#update-customer-button').on('click',()=>{
    let customerId = $('#customerId-update').val();
    let customerName = $('#customerName-update').val();
    let customerAddress = $('#customerAddress-update').val();
    let customerEmail = $('#customerEmail-update').val();
    let customerNic = $('#customerNic-update').val();
    clearUpdateFieldsCustomer()

    let customerObj =customerArray[customerRecordIndex];
    customerObj.customerID = customerId;
    customerObj.customerName = customerName;
    customerObj.customerAddress = customerAddress;
    customerObj.customerEmail = customerEmail;
    customerObj.customerNic = customerNic;
    loadCustomerTable();

});

function clearUpdateFieldsCustomer(){
    $('#customerId-update').val("");
    $('#customerName-update').val("");
    $('#customerAddress-update').val("");
    $('#customerEmail-update').val("");
    $('#customerNic-update').val("");
}