//customer detail array
let customerArray = [];

//table index
let recordCustomerIndex = undefined;


//get value in fields
$('#create-customer').on('click',()=>{
    let customerId = $('#customerId').val();
    let customerName = $('#customerName').val();
    let customerAddress = $('#customerAddress').val();
    let customerEmail = $('#customerEmail').val();
    let customerNic = $('#customerNic').val();

    let customerObj = new Customer(customerId,customerName,customerAddress,customerEmail,customerNic);
    customerArray.push(customerObj);
    loadCustomerTable();
    clearFields();
})


//data load to table
function loadCustomerTable(){
    $('#customer-table-body').empty();
    customerArray.map((item,index) => {
        let record = `<tr>
            <td>${item.customerID}</td>
            <td>${item.customerName}</td>
            <td>${item.customerAddress}</td>
            <td>${item.customerEmail}</td>
            <td>${item.customerNic}</td>      
            <td>
                <button id="customer-update-btn" data-bs-toggle="modal" data-bs-target="#exampleModal-update">update</button>
                <button id="customer-delete-btn">delete</button>
            </td>
        </tr>`;
        $('#customer-update-btn').css({borderRadius:'5px',border:'2px solid red'});
        $('#customer-delete-btn').css({borderRadius:'5px',border:'2px solid green'});

        $('#customer-table-body').append(record);
    });

}


//fields clear
function clearFields() {
    $('#customerId').val("");
    $('#customerName').val("");
    $('#customerAddress').val("");
    $('#customerEmail').val("");
    $('#customerNic').val("");
}

class Customer {
    constructor(customerID,customerName,customerAddress,customerEmail,customerNic) {
       this.customerID = customerID;
       this.customerName = customerName;
       this.customerAddress = customerAddress;
       this.customerEmail = customerEmail;
       this.customerNic = customerNic;
    }
}