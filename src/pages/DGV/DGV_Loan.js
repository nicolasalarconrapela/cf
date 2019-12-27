import React from 'react';

import { DGV_Base } from './DGV_Base';
import { LOAN_Data } from '../../API/api_loan';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { GridComponent, CommandColumn, ColumnsDirective, ColumnDirective, Page, Group, Sort, Inject, Edit } from '@syncfusion/ej2-react-grids';
import NavBar from '../NavBar/NavBar';
let refresh;

/**
 * Clase que nos muestra en un DGV los autores
 */
export default class DGV_Loan extends DGV_Base {
    
    displayName = DGV_Loan.name
    
    constructor() {
        super(...arguments);
        this.groupOptions = { showGroupedColumn: true, columns: ['idUserDT'] };

        // Menu items definition
        this.menuItems = [

            { text: 'Help' }
        ];
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
        /** cuando */

        if (refresh) {
            this.gridInstance.groupColumn('idUserDT');
            refresh = false;
        }
    }
    load() {
        refresh = this.refreshing;
    }
    handleButton(event) {
        event.preventDefault();
        alert("El mensaje que necesitas");
        return;
    }

    render() {
        return (
            <div className='control-pane'>
                <NavBar />
                <h2>LOAN</h2>
                <MenuComponent items={this.menuItems} onClick={this.handleButton} />
                <div className='control-section'>
                    <div className='control-section'>
                        <GridComponent
                            id='gridcomp'
                            dataSource={LOAN_Data}
                            allowPaging={false}
                            ref={grid => this.gridInstance = grid}
                            pageSettings={{ pageCount: 5 }}
                            allowGrouping={true}
                            groupSettings={this.groupOptions}
                            allowSorting={true}
                            dataBound={this.dataBound.bind(LOAN_Data)}
                            load={this.load}
                            editSettings={this.editSettings}>
                            <ColumnsDirective>
                                <ColumnDirective headerText='' width='20' commands={this.commands}></ColumnDirective>
                                <ColumnDirective field='idLoan' width="40" visible={true} headerText='idLoan'></ColumnDirective>
                                <ColumnDirective field='idUserDT' width="40" visible={true} headerText='idUserDT' ></ColumnDirective>
                                <ColumnDirective field='idBook' width="40" visible={true} headerText='idBook' ></ColumnDirective>
                                <ColumnDirective field='loanDate' width="40" visible={true} headerText='loanDate' ></ColumnDirective>
                                <ColumnDirective field='returnDate' width="40" visible={true} headerText='returnDate' ></ColumnDirective>
                            </ColumnsDirective>
                            <Inject services={[Page, Group, Sort, Edit, CommandColumn]} />
                        </GridComponent>
                    </div>
                </div>
            </div>
        );
    }
}