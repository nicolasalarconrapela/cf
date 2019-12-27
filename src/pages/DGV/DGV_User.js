import React from 'react';

import { GridComponent, CommandColumn, ColumnsDirective, ColumnDirective, Page, Group, Sort, Inject, Edit } from '@syncfusion/ej2-react-grids';
import { USER_Data } from '../../API/api_user';
import { DGV_Base } from './DGV_Base';
import NavBar from '../NavBar/NavBar';

let refresh;

/**
 * Clase que nos muestra en un DGV los autores.
 * 
 * @author NAR
 * @version 1.0.0
 */
export default class DGV_User extends DGV_Base {

    constructor() {

        super(...arguments);
        this.groupOptions = { showGroupedColumn: true, columns: ['idUser'] };
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
            this.gridInstance.groupColumn('idUser');
            refresh = false;
        }
    }
    load() {
        refresh = this.refreshing;
    }

    render() {

        return (<div className='control-pane'>
            <NavBar />
            <h2>USUARIOS</h2>

            <div className='control-section'>
                <GridComponent
                    id='gridcomp'
                    dataSource={USER_Data}
                    allowPaging={false}
                    ref={grid => this.gridInstance = grid}
                    pageSettings={{ pageCount: 5 }}
                    allowGrouping={true}
                    groupSettings={this.groupOptions}
                    allowSorting={true}
                    dataBound={this.dataBound.bind(USER_Data)}
                    load={this.load}
                    editSettings={this.editSettings}>

                    <ColumnsDirective>
                        <ColumnDirective headerText='' width='160' commands={this.commands}></ColumnDirective>
                        <ColumnDirective headerText='ID' field='idUser' width='50' isPrimaryKey={true} validationRules={this.validationRule} visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Usuario' field='nameUser' width="140" visible={true}  ></ColumnDirective>
                        <ColumnDirective headerText='A-Z' field='alias' width="50" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Contraseña' field='password' editType='datepickeredit' width="120" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Acceso' field='access' editType='datepickeredit' width="50" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Primer nombre' field='firstName' width="140" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Segundo nombre' field='lastName' width="140" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Movil' field='phone' width="140" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Telefono' field='telePhone' width="140" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='@' field='email' width="200" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Nacimiento' field='dateofBirth' width="140" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Calle' field='street' width="140" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='CP' field='cp' width="90" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Poblacion' field='population' width="100" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Provincia' field='province1' width="100" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Ciudad' field='country1' width="140" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Sexo' field='sex1' width="40" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='DNI' field='documentIdentify' width="140" visible={true} ></ColumnDirective>
                        <ColumnDirective headerText='Photo' field='photo' width="140" visible={true}  ></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Page, Group, Sort, Edit, CommandColumn]} />
                </GridComponent>

            </div>
        </div>);
    }
}