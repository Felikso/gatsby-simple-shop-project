<section  className="product-filter">

  <h1>Produkty</h1>

      <nav className="sort">
        {/* select short_name */}
        <div className="collection-sort">
          <label htmlFor="short_name">Typ</label>
          <select
            name="short_name"
            id="short_name"
            onChange={handleChange}
            className="form-control-filter"
            value={short_name}
          >
            {short_names}
          </select>
        </div>
        {/* end of select short_name */}
       
        {/* select alt */}
        <div className="collection-sort">
          <label htmlFor="alt">Rodzaj</label>
          <select
            name="alt"
            id="alt"
            onChange={handleChange}
            className="form-control-filter"
            value={alt}
          >
            {alts}
          </select>
        </div>

        
        {/* end of select alt */}
    
      </nav>
     
    </section>
