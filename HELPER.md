# Helper codes for the coding

### Component/Service generation

```bash
ng generate component  --spec false  pages/players-page
ng generate service  --spec false  services/player
ng generate component  --spec false  pages/players-page/list-players
ng generate component  --spec false  pages/players-page/add-player
ng generate component  --spec false  pages/players-page/modify-player
```

### players-page.component.html

```html
<div class="columns">
  <div class="column col-12">
    <h2 class="text-center">Players page</h2>
    <div class="divider"></div>
  </div>
</div>
```

### add-player.component.html

```html
<form novalidate>
  <div class="container">
    <div class="columns">
      <div class="column col-3 col-sm-8 form-group has-error">
        <label class="form-label" for="name">Name</label>
        <input class="form-input" type="text" id="name" placeholder="">
      </div>

      <div class="column col-2 col-sm-8 form-group has-error">
        <label class="form-label" for="age">Age</label>
        <input class="form-input" type="text" id="age" placeholder="">
      </div>

      <div class="column col-2 col-sm-8 form-group has-error">
        <label class="form-label" for="shirt">Shirt number</label>
        <input class="form-input" type="text" id="shirt" placeholder="">
      </div>

      <div class="column col-3 col-sm-8 form-group">
        <label class="form-label" for="idTeam">Team</label>
        <select class="form-select" id="idTeam">
          <option value="team id">team name</option>
        </select>
      </div>

      <div class="column col-2 col-sm-8 form-group">
        <label class="form-label" for="">&nbsp;</label>
        <button type="submit" class="btn btn-primary input-group-btn"
                >Save</button>
      </div>
    </div>
  </div>
</form>
```

### modify-player.component.html

```html

<div class="modal modal-sm active" id="modal-id">
  <a href="#close" class="modal-overlay" aria-label="Close"></a>
  <div class="modal-container">
    <div class="modal-header">
      <a href="#close" class="btn btn-clear float-right" aria-label="Close"
         ></a>
      <div class="modal-title h5">Edit player</div>
    </div>
    <div class="modal-body">
      <div class="content">

        <form novalidate>
          <div class="container">
            <div class="columns">
              <div class="column col-12 col-sm-8 form-group has-error">
                <label class="form-label" for="name">Name</label>
                <input class="form-input" type="text" id="name" placeholder="">
              </div>

              <div class="column col-12 col-sm-8 form-group has-error">
                <label class="form-label" for="age">Age</label>
                <input class="form-input" type="text" id="age" placeholder="">
              </div>

              <div class="column col-12 col-sm-8 form-group has-error">
                <label class="form-label" for="shirt">Shirt number</label>
                <input class="form-input" type="text" id="shirt" placeholder="">
              </div>

              <div class="column col-12 col-sm-8 form-group">
                <label class="form-label" for="idTeam">Team</label>
                <select class="form-select" id="idTeam">
                  <option value="team id">Team name</option>
                </select>
              </div>

            </div>
          </div>
        </form>

      </div>
    </div>
    <div class="modal-footer">
      <div class="column col-12 col-sm-8 form-group">
        <button type="submit" class="btn btn-primary input-group-btn"
                >Save</button>
      </div>
    </div>
  </div>
</div>
```