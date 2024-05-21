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
                } else {
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
