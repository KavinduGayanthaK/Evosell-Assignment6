document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);

        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.id === 'ItemCode') {
                    validateItemCode(input);
                } else if (input.id === 'ItemName') {
                    validateItemName(input);
                } else if (input.id === "ItemPrice") {
                    validateItemPrice(input);
                } else if (input.id === "ItemQty") {
                    validateItemQty(input);
                }else if (input.id === 'customerId') {
                    validateCustomerId(input);
                } else if (input.id === 'customerName') {
                    validateCustomerName(input);
                } else if (input.id === "customerAddress") {
                    validateCustomerAddress(input);
                } else if (input.id === "customerEmail") {
                    validateCustomerEmail(input);
                } else if (input.id === "customerNic") {
                    validateCustomerNic(input);
                }
                else {
                    if (!input.checkValidity()) {
                        input.classList.add('is-invalid');
                    } else {
                        input.classList.remove('is-invalid');
                        input.classList.add('is-valid');
                    }
                }
            });
        });
    });

    Array.from(forms).forEach(form => {
        form.addEventListener('enter', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);

        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.id === 'item-code-order') {
                    validateItemCodeOrder(input);
                } else if (input.id === 'item-name-order') {
                    validateItemNameOrder(input);
                } else if (input.id === "item-qty-order") {
                    validateItemQtyOrder(input);
                } else if (input.id === "item-price-order") {
                    validateItemPriceOrder(input);
                } else if (input.id === 'customerNic-order') {
                    validateCustomerNicOrder(input);
                } else if (input.id === 'customerName-order') {
                    validateCustomerNameOrder(input);
                }else if (input.id === 'cash') {
                    validateCashField(input);
                }else if (input.id === 'discount') {
                    validateDiscountField(input);
                }
                else {
                    if (!input.checkValidity()) {
                        input.classList.add('is-invalid');
                    } else {
                        input.classList.remove('is-invalid');
                        input.classList.add('is-valid');
                    }
                }
            });

            // Prevent form submission on Enter key press within input fields
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.keyCode === 13) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        });
    });
});

function validateItemCode(input) {
    let id = input.value;
    const itemLabel = $('#item-label');

    if (id.startsWith('I00-')) {
        const numericPart = id.substring(4);

        if (/^\d{3,}$/.test(numericPart)) {
            itemLabel.css({display: 'none'});
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            $('#ItemCode').css({border: '1px solid green'});
            return true;
        } else {
            itemLabel.text('Item ID must be a minimum 3 digit value after I00- format.');
            itemLabel.css({display: 'block'});
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            $('#ItemCode').css({border: '1px solid red'});
            return false;
        }
    } else {
        itemLabel.text('Item Code must start with "I00-".');
        itemLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        $('#ItemCode').css({border: '1px solid red'});
        return false;
    }
}

function validateItemName(input) {
    let name = input.value;
    const itemLabel = $('#item-name-label');

    let trimName = name.trim();
    if (trimName.length >= 5 && trimName.length <= 20 && /^[a-zA-Z ]+$/.test(trimName)) {
        itemLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        itemLabel.text(' Item name is required field:Minimum 5,max 20,space allowed.');
        itemLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateItemPrice(input) {
    let price = input.value;
    const itemPriceLabel = $('#item-price-label');

    if (/^\d+(\.\d{1,2})?$/.test(price)) {
        itemPriceLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        itemPriceLabel.text('Item Price is a required field : Pattern 100.00 or 100.');
        itemPriceLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateItemQty(input) {
    let qty = input.value;
    const itemQtyLabel = $('#item-qty-label');

    if (/^\d+$/.test(qty)) {
        itemQtyLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        itemQtyLabel.text(' Item Qty is a required field.Only numbers.');
        itemQtyLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateCustomerId(input) {
    let id = input.value;
    const customerID = $('#customer-id-label');

    if (id.startsWith('C00-')) {
        const numericPart = id.substring(4);

        if (/^\d{3,}$/.test(numericPart)) {
            customerID.css({display: 'none'});
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            $('#customerId').css({border: '1px solid green'});
            return true;
        } else {
            customerID.text('Customer ID must be a minimum 3 digit value after C00- format.');
            customerID.css({display: 'block'});
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            $('#customerId').css({border: '1px solid red'});
            return false;
        }
    } else {
        customerID.text('Customer Id must start with "C00-');
        customerID.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        $('#customerId').css({border: '1px solid red'});
        return false;
    }
}

function validateCustomerName(input) {
    let customerName = input.value;
    const customerLabel = $('#customer-name-label');

    let trimName = customerName.trim();
    if (trimName.length >= 5 && trimName.length <= 20 && /^[a-zA-Z ]+$/.test(trimName)) {
        customerLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        customerLabel.text(' Customer name is required field:Minimum 5,max 20,space allowed.');
        customerLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateCustomerAddress(input) {
    let customerAddress = input.value;
    const customerLabel = $('#customer-address-label');

    let trimName = customerAddress.trim();
    if (trimName.length >= 5 && trimName.length <= 60 && /^No\d+,?\s[A-Za-z]+,?\s[A-Za-z]+$/.test(trimName)) {
        customerLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        customerLabel.text('Customer address is required field:Minimum 5,max 60,space allowed.');
        customerLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateCustomerEmail(input) {
    let customerEmail = input.value;
    const customerLabel = $('#customer-email-label');

    let trimName = customerEmail.trim();
    if (trimName.length >= 5 && trimName.length <= 60 && /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(trimName)) {
        customerLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        customerLabel.text('Please enter a valid email address.');
        customerLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateCustomerNic(input) {
    let customerNic = input.value;
    const customerLabel = $('#customer-nic-label');

    const nicPattern = /^\d{9}[VX]|\d{12}$/;
    if (nicPattern.test(customerNic)) {
        customerLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        customerLabel.text('NIC must be in the format "123456789V", "123456789X", or "200043502345".');
        customerLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateItemCodeOrder(input) {
    let id = input.value;
    const itemLabel = $('#item-label1');

    if (id.startsWith('I00-')) {
        const numericPart = id.substring(4);

        if (/^\d{3,}$/.test(numericPart)) {
            itemLabel.css({display: 'none'});
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
            $('#item-code-order').css({border: '1px solid green'});
            return true;
        } else {
            itemLabel.text('Item ID must be a minimum 3 digit value after I00- format.');
            itemLabel.css({display: 'block'});
            input.classList.add('is-invalid');
            input.classList.remove('is-valid');
            $('#item-code-order').css({border: '1px solid red'});
            return false;
        }
    } else {
        itemLabel.text('Item Code must start with "I00-".');
        itemLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        $('#item-code-order').css({border: '1px solid red'});
        return false;
    }
}

function validateItemNameOrder(input) {
    let name = input.value;
    const itemLabel = $('#item-name-label1');

    let trimName = name.trim();
    if (trimName.length >= 5 && trimName.length <= 20 && /^[a-zA-Z ]+$/.test(trimName)) {
        itemLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        itemLabel.text(' Item name is required field:Minimum 5,max 20,space allowed.');
        itemLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateItemQtyOrder(input) {
    let qty = input.value;
    const itemQtyLabel = $('#item-qty-label1');

    if (/^\d+$/.test(qty)) {
        itemQtyLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        itemQtyLabel.text(' Item Qty is a required field.Only numbers.');
        itemQtyLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateItemPriceOrder(input) {
    let price = input.value;
    const itemPriceLabel = $('#item-price-label1');

    if (/^\d+(\.\d{1,2})?$/.test(price)) {
        itemPriceLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        itemPriceLabel.text('Item Price is a required field : Pattern 100.00 or 100.');
        itemPriceLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateCustomerNameOrder(input) {
    let customerName = input.value;
    const customerLabel = $('#customer-name-label1');

    let trimName1 = customerName.trim();
    if (trimName1.length >= 5 && trimName1.length <= 20 && /^[a-zA-Z ]+$/.test(trimName1)) {
        customerLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        customerLabel.text(' Customer name is required field:Minimum 5,max 20,space allowed.');
        customerLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateCustomerNicOrder(input) {
    let customerNic = input.value;
    const customerLabel = $('#customer-nic-label1');

    const nicPattern = /^\d{9}[VX]|\d{12}$/;
    if (nicPattern.test(customerNic)) {
        customerLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        customerLabel.text('NIC must be in the format "123456789V", "123456789X", or "200043502345".');
        customerLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateCashField(input) {
    let cash = input.value;
    const itemPriceLabel = $('#cash-label');

    if (/^\d+(\.\d{1,2})?$/.test(cash)) {
        itemPriceLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        itemPriceLabel.text('Item Price is a required field : Pattern 100.00 or 100.');
        itemPriceLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}

function validateDiscountField(input) {
    let discount = input.value;
    const itemPriceLabel = $('#discount-label1');

    if (/^\d+(\.\d{1,2})?$/.test(discount)) {
        itemPriceLabel.css({display: 'none'});
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        input.style.border = '1px solid green';
        return true;
    } else {
        itemPriceLabel.text('Item Price is a required field : Pattern 100.00 or 100.');
        itemPriceLabel.css({display: 'block'});
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        input.style.border = '1px solid red';
        return false;
    }
}