<template>

    <div>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group label="Nome" label-for="nome">
                <b-form-input
                    id="nome"
                    v-model="form.nome"
                    type="text"
                    required
                    placeholder="Digite seu nome"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Telefone" label-for="telefone">
                <b-form-input
                    id="telefone"
                    v-model="form.telefone"
                    required
                    placeholder="Digite seu numero"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Email" label-for="email">
                <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="Digite seu email"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        form: {
          nome: '',
          telefone: '',
          email: ''
        },
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        axios.post('/contatos', this.form)
            .then((res)=>{
                this.$store.commit('addContato', res.data)
                alert('Contato salvo ')
            })
            .catch((err)=>{
                alert('Erro ao salvar')
            })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.nome = ''
        this.form.telefone = ''
        this.form.email = ''
      }
    }
  }
</script>