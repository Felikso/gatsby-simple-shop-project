
    <nav>
    <Grid container direction="column">
      <Grid sm={12} xs={6}>
      <h2>PRODUKTY</h2>
      </Grid>
      <Grid sm={12} xs={6}>
      <FormControl variant="outlined" /* className={classes.formControl} */>
    <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
    <Select
      native
      label="Age"
      inputProps={{
        name: 'age',
        id: 'outlined-age-native-simple',
      }}
    >
      <option aria-label="None" value="" />
      <option value={10}>Ten</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
    </Select>
  </FormControl>
      </Grid>
      <Grid sm={12} xs={6}>
      <FormControl variant="outlined" /* className={classes.formControl} */>
    <InputLabel htmlFor="alt">Rodzaj</InputLabel>
    <Select
      native
      label="Rodzaj"
      onChange={handleChange}
      inputProps={{
        name="alt",
        id="alt",
      }}
    >
            {alts}
    </Select>
  </FormControl>
      </Grid>
    </Grid>
  </nav>