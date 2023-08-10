import React from 'react'
import { Box, Button, Grid, IconButton, Input, Typography } from '@mui/joy'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function AddModel({ tierVariations, setTierVariations }) {

    const addTierVariation = () => {
        const updateTierVariations = [...tierVariations, {
            id: tierVariations.at(-1).id + 1,
            name: null,
            options: [
                {
                    id: 1,
                    name: null
                }
            ]
        }];
        setTierVariations(updateTierVariations);
    };

    const deleteTierVariation = (index) => {
        const updateTierVariations = tierVariations.filter((item, i) => i !== index);
        setTierVariations(updateTierVariations);
    };

    const handleTierInputChange = (event, index) => {
        const updateTierVariations = tierVariations.map((item, i) => {
            if (i === index) {
                item.name = event.target.value;
            }
            return item;
        });
        setTierVariations(updateTierVariations);
    };

    const handleOptionInputChange = (event, index, optionIndex) => {
        const updateTierVariations = tierVariations.map((item, i) => {
            if (i === index) {
                item.options.at(optionIndex).name = event.target.value;
            }
            return item;
        });
        setTierVariations(updateTierVariations);
    };

    const deleteOptionInput = (index, optionId) => {
        const updateTierVariations = tierVariations.map((item, i) => {
            if (i === index && item.options.length > 1) {
                item.options = item.options.filter(option => option.id !== optionId);
            }
            return item;
        });
        setTierVariations(updateTierVariations);
    };

    const addOptionInput = (index) => {
        const updateTierVariations = tierVariations.map((item, i) => {
            if (i === index) {
                item.options.push({
                    id: item.options.at(-1).id + 1,
                    name: null
                });
            }
            return item;
        });
        setTierVariations(updateTierVariations);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "16px" }}>
            {tierVariations.map((tier, index) => {
                let tierPlaceholder = '';
                let optionPlaceholder = '';
                if (index === 0) {
                    tierPlaceholder = 'ví dụ: màu sắc v.v';
                    optionPlaceholder = 'ví dụ: Trắng, Đỏ, v.v';
                } else if (index === 1) {
                    tierPlaceholder = 'ví dụ: Size v.v';
                    optionPlaceholder = 'ví dụ: S, M, L, v.v';
                }
                return (
                    <Box
                        key={tier.id}
                        sx={{ display: "flex", flexDirection: "column", rowGap: 2, bgcolor: "#f6f6f6", p: 2, borderRadius: "16px" }}
                    >
                        <IconButton
                            variant='plain'
                            color='danger'
                            size='sm'
                            sx={{ marginLeft: "auto" }}
                            onClick={() => deleteTierVariation(index)}
                        >
                            <CloseRoundedIcon />
                        </IconButton>
                        <Grid container rowSpacing={3}>
                            <Grid xs={2}>
                                <Typography>{`Nhóm phân loại ${index + 1}`}</Typography>
                            </Grid>
                            <Grid xs={10}>
                                <Input
                                    required
                                    type='text'
                                    onChange={(event) => handleTierInputChange(event, index)}
                                    placeholder={tierPlaceholder}
                                />
                            </Grid>
                            <Grid xs={2}>
                                <Typography>Phân loại hàng</Typography>
                            </Grid>
                            <Grid xs={10}>
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                                    {tier.options.map((option, optionIndex) =>
                                        <Input
                                            required
                                            onChange={(event) => handleOptionInputChange(event, index, optionIndex)}
                                            key={option.id}
                                            type='text'
                                            endDecorator={
                                                <IconButton
                                                    color='danger'
                                                    onClick={() => deleteOptionInput(index, option.id)}
                                                >
                                                    <DeleteOutlineRoundedIcon />
                                                </IconButton>}
                                            placeholder={optionPlaceholder}
                                        />)
                                    }
                                </Box>
                            </Grid>
                            <Grid xs={2}></Grid>
                            <Grid xs={10}>
                                <Button onClick={() => addOptionInput(index)}>Thêm phân loại</Button>
                            </Grid>
                        </Grid>
                    </Box>
                )
            })}

            {tierVariations.length === 1 &&
                <Box sx={{ bgcolor: "#f6f6f6", p: 2, borderRadius: "16px" }}>
                    <Grid
                        container
                        rowSpacing={3}
                    >
                        <Grid xs={2}>
                            <Typography>Nhóm phân loại 2</Typography>
                        </Grid>
                        <Grid xs={10}>
                            <Button
                                variant='outlined'
                                onClick={addTierVariation}
                                startDecorator={<AddRoundedIcon />}
                            >Thêm nhóm phân loại 2</Button>
                        </Grid>
                    </Grid>
                </Box>
            }
        </Box>
    )
}

export default AddModel