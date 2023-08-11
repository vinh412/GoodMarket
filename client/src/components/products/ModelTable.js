import { Input, Table } from '@mui/joy'
import React from 'react'

function ModelTable({ tierVariations }) {
    return (
        <Table
            borderAxis="both"
            color="neutral"
            variant="plain">
            <thead>
                <tr>
                    {tierVariations.map((item) => {
                        return <th key={item.id}>{item.name}</th>
                    })}
                    <th>Giá</th>
                    <th>Số lượng</th>
                </tr>
            </thead>
            <tbody>
                {tierVariations[0].options.map((item, index) => 
                    <React.Fragment key={item.id}>
                        {
                            !tierVariations[1] ?
                                <tr>
                                    <td>{item.name}</td>
                                    <td><Input type='number' name={`price${item.id}`} required/></td>
                                    <td><Input type='number' name={`quantity${item.id}`} required/></td>
                                </tr>
                                :
                                <>
                                    <tr>
                                        <td rowSpan={tierVariations[1].options.length + 1}>{item.name}</td>
                                    </tr>
                                    {tierVariations[1].options.map((option) =>
                                        <tr key={option.id}>
                                            <td>{option.name}</td>
                                            <td><Input type='number' name={`price${item.id}${option.id}`} required/></td>
                                            <td><Input type='number' name={`quantity${item.id}${option.id}`} required/></td>
                                        </tr>
                                    )}
                                </>
                        }
                    </React.Fragment>

                )}
            </tbody>
        </Table>
    )
}

export default ModelTable