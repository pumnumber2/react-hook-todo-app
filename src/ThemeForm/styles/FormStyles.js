const styles = (theme) => {
  const { unit } = theme.spacing;
  return ({
    main: {
      width: 'auto',
      display: 'block',
      marginLeft: unit * 3,
      marginRight: unit * 3,
      [theme.breakpoints.up("sm")]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${unit * 2}px ${unit * 3}px ${unit * 3}px`
    },
    avatar: {
      margin: unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%',
      marginTop: unit * 3,
    },
    submit: {
      marginTop: unit * 3,
    },
  })
};

export default styles