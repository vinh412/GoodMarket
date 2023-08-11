import React from 'react'
import BasicInfo from '../../components/products/BasicInfo'
import SaleInfo from '../../components/products/SaleInfo'
import { Box, Button } from '@mui/joy'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
    const navigate = useNavigate();
    const { shop } = useAuthContext();
    const [tierVariations, setTierVariations] = React.useState([]);
    const [selectedImage, setSelectedImage] = React.useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create an object of formData
        const formData = new FormData();
        const formElements = event.currentTarget.elements;

        const models = [];

        const formatTierVariations = tierVariations.map((tier, index) => {
            const options = tier.options.map((option, i) => {
                return { name: option.name };
            })
            return { name: tier.name, options: options };
        });
        if (tierVariations.length === 0) {
            formData.append(
                "price",
                formElements.price.value
            );
            formData.append(
                "quantity",
                formElements.quantity.value
            );
        } else if (tierVariations.length === 1) {
            tierVariations[0].options.forEach((option, i) => {
                const name = `${option.name}`
                const price = formElements[`price${option.id}`].value;
                const quantity = formElements[`quantity${option.id}`].value;
                models.push({
                    name,
                    price,
                    quantity
                })
            })
        } else if (tierVariations.length === 2) {
            tierVariations[0].options.forEach((option1, i1) => {
                tierVariations[1].options.forEach((option2, i2) => {
                    const name = `${option1.name}, ${option2.name}`;
                    const price = formElements[`price${option1.id}${option2.id}`].value;
                    const quantity = formElements[`quantity${option1.id}${option2.id}`].value;
                    models.push({
                        name,
                        price,
                        quantity
                    })
                })
            })
        }

        //Update the formData object
        selectedImage.forEach((image) => {
            formData.append(
                "images",
                image
            );
        })
        formData.append("tier_variations", JSON.stringify(formatTierVariations));
        formData.append("models", JSON.stringify(models));
        formData.append("shopId", shop.id);
        formData.append("name", formElements.name.value);
        formData.append("description", formElements.desc.value);

        // Display the key/value pairs
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        fetch('http://localhost:3000/api/v1/shop/product/add', {
            method: 'POST',
            body: formData
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log('Server response:', data);
                navigate(0);
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });

    }
    return (
        <Box component="form" onSubmit={handleSubmit} encType='multipart/form-data'>
            <BasicInfo selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
            <SaleInfo tierVariations={tierVariations} setTierVariations={setTierVariations} />
            <Box sx={{ display: "flex", my: 3, justifyContent: "end", gap: "8px" }}>
                <Button variant='solid' color='neutral'>Hủy</Button>
                <Button type='submit'>Xác nhận</Button>
            </Box>
        </Box>
    )
}

export default AddProduct