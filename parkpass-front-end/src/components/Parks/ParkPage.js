import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

export default function ParkPage() {
  return (
    <div>
      ParkPage
      {/* leave ratings and comments here */}
    
    </div>
  )
}

expand: {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},
expandOpen: {
  transform: 'rotate(180deg)',
}

const [expanded, setExpanded] = React.useState(false);
const handleExpandClick = () => {
  setExpanded(!expanded);
};

<IconButton
className={clsx(classes.expand, {
  [classes.expandOpen]: expanded,
})}
onClick={handleExpandClick}
aria-expanded={expanded}
aria-label="show more"
>
 <ExpandMoreIcon />
</IconButton>
</CardActionArea>
<Collapse in={expanded} timeout="auto" unmountOnExit>
<CardContent>
<Typography paragraph>Put Active Icons Here</Typography>
</CardContent>
</Collapse>

