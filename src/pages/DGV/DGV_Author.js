import React from 'react';

import { GridComponent, CommandColumn, ColumnsDirective, ColumnDirective, Page, Group, Sort, Inject, Edit } from '@syncfusion/ej2-react-grids';
import { AUTHOR_Data } from '../../API/api_author';
import { DGV_Base } from './DGV_Base';
import NavBar from '../NavBar/NavBar';

let refresh;

/**
 * Clase que nos muestra en un DGV los autores.
 * 
 * @author NAR
 * @version 1.0.0
 */
export default class DGV_Author extends DGV_Base {

    constructor() {
        super(...arguments);
        this.groupOptions = { showGroupedColumn: true, columns: ['prefix'] };

        // // Obtencion de datos con URL's
        // // https://localhost:5001/api/author/get
        // // Pruebas desde localhost
        // this.hostUrl = 'https://localhost:5001/';
        // this.data = new DataManager({
        //     url: this.hostUrl + 'api/author/get/1'
        //     , adaptor: new WebApiAdaptor()
        // });
        // console.log(this.data)

        // // Pruebas con otra url diferente
        // this.hostUrl2 = 'https://ej2services.syncfusion.com/production/web-services/';
        // this.data2 = new DataManager({
        //     url: this.hostUrl2 + 'api/Orders',
        //     adaptor: new WebApiAdaptor
        // });
        // console.log(this.data2)


        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, allowEditOnDblClick: false };
        this.editparams = { params: { popupHeight: '300px' } };
        this.validationRule = { required: true };
        this.commands = [
            { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
            { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
            { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
            { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }
        ];
    }
    dataBound() {

        if (refresh) {
            this.gridInstance.groupColumn('prefix');
            refresh = false;
        }
    }
    load() {
        refresh = this.refreshing;
    }

    render() {

        return (
            <div className='control-pane'>
                <NavBar />
                <h2>AUTHOR</h2>

                <div className='control-section'>
                    <GridComponent
                        id='gridcomp'
                        dataSource={AUTHOR_Data}
                        allowPaging={false}
                        ref={grid => this.gridInstance = grid}
                        pageSettings={{ pageCount: 5 }}
                        allowGrouping={true}
                        groupSettings={this.groupOptions}
                        allowSorting={true}
                        dataBound={this.dataBound.bind(AUTHOR_Data)}
                        load={this.load}
                        editSettings={this.editSettings}>

                        <ColumnsDirective>
                            <ColumnDirective headerText='' width='160' commands={this.commands}></ColumnDirective>
                            <ColumnDirective headerText='Letra' field='prefix' width='90' validationRules={this.validationRule} visible={true} ></ColumnDirective>
                            <ColumnDirective headerText='ID' field='idAuthor' isPrimaryKey={true} width="40" visible={true}  ></ColumnDirective>
                            <ColumnDirective headerText='Nombre completo' field='nameAuthor' width="140" visible={true} ></ColumnDirective>
                            <ColumnDirective headerText='Nacimiento' field='dateofBirth' editType='datepickeredit' format='ddmmyy' width="120" visible={true} ></ColumnDirective>
                            <ColumnDirective headerText='Muerte' field='dateofDeath' editType='datepickeredit' format='ddmmyy' width="120" visible={true} ></ColumnDirective>
                            <ColumnDirective headerText='Primer nombre' field='firstName' width="140" visible={true} ></ColumnDirective>
                            <ColumnDirective headerText='Segundo nombre' field='lastName' width="140" visible={true} ></ColumnDirective>
                            <ColumnDirective field='placeofBirth' width="140" visible={true} headerText='Nacimiento'></ColumnDirective>
                            <ColumnDirective field='placeofDeath' width="140" visible={true} headerText='Muerte'></ColumnDirective>
                            <ColumnDirective headerText='URL Wikipedia' field='urlWIki' width="140" visible={true} ></ColumnDirective>
                            <ColumnDirective field='URL Web' width="140" visible={true} headerText='urlOfficialPage'></ColumnDirective>
                            <ColumnDirective field='pseudonyms' width="140" visible={true} headerText='Pseudonimo'></ColumnDirective>
                            <ColumnDirective field='imgScale1616' width="140" visible={true} headerText='Imagen I'></ColumnDirective>
                            <ColumnDirective field='imgScaleBig' visible={true} headerText='Imagen II'></ColumnDirective>
                            <ColumnDirective field='imgUrl' width="140" visible={true} headerText='Imagen Url' ></ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[Page, Group, Sort, Edit, CommandColumn]} />
                    </GridComponent>

                </div>
            </div>);
    }
}