<template>
  <div>
    <b-table striped hover :items="contatos" :fields="cabecalhos">
        <template v-slot:cell(acoes)="data">
           <b-button variant="danger" size="sm" @click="alertExclusao(data.item.id)">Excluir</b-button>
        </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
        cabecalhos: [
          {
            key: 'nome',
            label: 'Nome'
          },
          {
            key: 'telefone',
            label: 'Telefone'
          },
          {
            key: 'acoes',
            label: 'Ações'
          }
        ],
      }
    },
    mounted () {
        axios.get('/contatos')
            .then((res)=>{
                //this.contatos = res.data
                this.$store.commit('setContatos', res.data)
            })
            .catch((err)=>{
                alert('Erro ao listar os contatos')
            })
    },
    computed: {
        contatos (){
            return this.$store.state.contatos
        }
    },
    methods: {
        alertExclusao (id){
            this.$swal.fire({
                
                text: "Deseja mesmo excluir este conteúdo?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não'
            })
            
            .then((result) => {
                if (result.isConfirmed) {
                    this.excluir(id)
                }
            })
        },
        excluir(id) {
            axios.delete('/contatos/'+id)
                .then((res)=>{
                    this.$store.commit(
                        "setContatos",
                        this.$store.state.contatos.filter((contato)=> contato.id !== id)
                    )
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Perfeito',
                        test: 'Excluído com sucesso',
                    })
                })
                .catch((err)=>{

                })
        }
    }
  }
</script>