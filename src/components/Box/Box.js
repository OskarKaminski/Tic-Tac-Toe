import React from 'react'

import { Box, BoxContent } from './Box.styles'

const BoxComponent = ({sign}) => (
    <Box>
        <BoxContent>
            {
                sign && <span>{sign}</span>
            }
        </BoxContent>
    </Box>
)

export default BoxComponent