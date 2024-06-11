import CustomerModel from "../model/customerModel.js";
import {customerArray} from "../db/db.js";

let customerRecordIndex = undefined;


$(document).ready(function () {
    $('#customerId').val('C00-100');

    $('#create-customer-btn').on('click', (event) => {
        event.preventDefault();

        if ($('#create-customer-btn').text() === "CREATE CUSTOMER") {

            let customerId = $('#customerId').val();
            let customerName = $('#customerName').val();
            let customerAddress = $('#customerAddress').val();
            let customerEmail = $('#customerEmail').val();
            let customerNic = $('#customerNic').val();

            let customerObj = new CustomerModel(customerId, customerName, customerAddress, customerEmail, customerNic);
            clearFieldsCustomer();
            customerArray.push(customerObj);
            loadCustomerTable();
            generateCustomerId(customerId);


        } else {
            let customerId1 = $('#customerId').val();
            let customerName1 = $('#customerName').val();
            let customerAddress1 = $('#customerAddress').val();
            let customerEmail1 = $('#customerEmail').val();
            let customerNic1 = $('#customerNic').val();
            clearUpdateFieldsCustomer();

            let customerObj1 = customerArray[customerRecordIndex];
            customerObj1.customerID = customerId1;
            customerObj1.customerName = customerName1;
            customerObj1.customerAddress = customerAddress1;
            customerObj1.customerEmail = customerEmail1;
            customerObj1.customerNic = customerNic1;
            loadCustomerTable();
        }
    });

    $('#add-customer-btn').on('click', () => {
        $('#create-customer-btn').text("CREATE CUSTOMER");
        $('#exampleModalLabel-customer').text("Create a new customer");
    });

    $('#customer-table-body').on('click', '#customer-update-btn', function () {
        $('#create-customer-btn').text("UPDATE CUSTOMER");
        $('#exampleModalLabel-customer').text("Update customer");
        customerRecordIndex = $(this).closest('tr').index();
        let customerId = $(this).closest('tr').find('.customerId-value').text();
        let customerName = $(this).closest('tr').find('.customerName-value').text();
        let customerAddress = $(this).closest('tr').find('.customerAddress-value').text();
        let customerEmail = $(this).closest('tr').find('.customerEmail-value').text();
        let customerNic = $(this).closest('tr').find('.customerNic-value').text();

        $('#customerId').val(customerId);
        $('#customerName').val(customerName);
        $('#customerAddress').val(customerAddress);
        $('#customerEmail').val(customerEmail);
        $('#customerNic').val(customerNic);
    });

    $('#customer-table-body').on('click', '#customer-delete-btn', function () {
        let recordIndex1 = $(this).closest('tr').index();
        customerArray.splice(recordIndex1, 1);
        loadCustomerTable();
    });

    function loadCustomerTable() {
        $('#customer-table-body').empty();
        customerArray.forEach((item, index) => {
            let record = `<tr>
                <td class="customerId-value">${item.customerID}</td>
                <td class="customerName-value">${item.customerName}</td>
                <td class="customerAddress-value">${item.customerAddress}</td>
                <td class="customerEmail-value">${item.customerEmail}</td>
                <td class="customerNic-value">${item.customerNic}</td>      
                <td>
                    <button id="customer-update-btn" data-bs-toggle="modal" data-bs-target="#exampleModal-customer">update</button>
                    <button type="button" id="customer-delete-btn" >delete</button>
                </td>
            </tr>`;
            $('#customer-table-body').append(record);
        });
    }

    function clearFieldsCustomer() {
        $('#customerId').val("");
        $('#customerName').val("");
        $('#customerAddress').val("");
        $('#customerEmail').val("");
        $('#customerNic').val("");
    }

    function clearUpdateFieldsCustomer() {
        $('#customerId-update').val("");
        $('#customerName-update').val("");
        $('#customerAddress-update').val("");
        $('#customerEmail-update').val("");
        $('#customerNic-update').val("");
    }

    function generateCustomerId(customerId) {
        let split = customerId.split("-");
        let split1 = +(split[1]) + 1;
        let newNumericPart = split1.toString().padStart(split[1].length, '0');
        let newCustomerId = split[0] + "-" + newNumericPart;
        $('#customerId').val(newCustomerId);

    }

});

