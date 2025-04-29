/***************************************************************************
 * Objetivo: Arquivo responsavel pela padronização de mensagem e status code
 * Data: 18/02/2025
 * Autor: Beatriz Rodrigues
 * Versão: 1.0
 ****************************************************************************/

/*********************STATUS CODE DE ERROS*************************/
const ERROR_REQUIRE_FIELDS  = {status: false, status_code: 400, message: "Existe campos de preenchimento obrigatórios ou quantidade de caractres que não foram atendidos na requisição!!"}
const ERROR_INTERNAL_SERVER_MODEL = {status: false, status_code: 500, message:"Devido a um erro interno no servidor da MODEL, não foi possivel processar a requisição"}
const ERROR_INTERNAL_SERVER_CONTROLLER = {status: false, status_code: 500, message:"Devido a um erro interno no servidor da CONTROLLER, não foi possivel processar a requisição"}
const ERROR_CONTENT_TYPE = {status: false, status_code: 415, message:"O content-type encaminhado não é suportado pelo servidor. Você deve encaminhar apenas conteúdo no formato JSON"}
const ERROR_NOT_FOUND = {status: false, status_code: 404, message:"Não foram encontrados itens de retorno!!"}


/*********************STATUS CODE DE SUCESSO*************************/

const SUCESS_CREATED_ITEM = {status: true, status_code: 201, message: "Item criado com sucesso!!!"}
const SUCESS_DELETE_ITEM  = {status: true, status_code: 200, message: "Item criado com sucesso!!!"}
const SUCESS_UPDATE_ITEM  = {status: true, status_code: 200, message: "Item atualizado com sucesso!!"}

module.exports = {
    ERROR_REQUIRE_FIELDS,
    ERROR_INTERNAL_SERVER_MODEL,
    ERROR_INTERNAL_SERVER_CONTROLLER,
    ERROR_CONTENT_TYPE,
    ERROR_NOT_FOUND,
    SUCESS_CREATED_ITEM,
    SUCESS_DELETE_ITEM,
    SUCESS_UPDATE_ITEM,
}