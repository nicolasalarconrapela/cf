import React from 'react';

import { GridComponent, CommandColumn, ColumnsDirective, ColumnDirective, Page, Group, Sort, Inject, Edit } from '@syncfusion/ej2-react-grids';

import { BOOKS_Data } from '../../API/api_book';
import { DGV_Base } from './DGV_Base';
import NavBar from '../NavBar/NavBar';

/** Variable de refresco */
let refresh;

/**
 * DGV los autores
 *
 * @author NAR
 * @version 1.0.0
 */
export default class DGV_Books extends DGV_Base {

    displayName = DGV_Books.name

    constructor() {
        super(...arguments);
        this.groupOptions = { showGroupedColumn: true, columns: ['idBook'] };

        // Obtencion de datos con URL's
        // https://localhost:5001/api/author/get
        // Pruebas desde localhost
        // this.hostUrl = 'https://localhost:5001/';
        // this.data = new DataManager({
        //     url: this.hostUrl + 'api/books/get/'
        //     , adaptor: new WebApiAdaptor()
        // });
        // console.log(this.data)

        // Pruebas con otra url diferente
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
        /** cuando */
        if (refresh) {
            this.gridInstance.groupColumn('idBook');
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

                <h2>BOOKS</h2>
                <div className='control-section'>
                    <GridComponent
                        id='gridcomp'
                        dataSource={BOOKS_Data}
                        allowPaging={false}
                        ref={grid => this.gridInstance = grid}
                        pageSettings={{ pageCount: 5 }}
                        allowGrouping={true}
                        groupSettings={this.groupOptions}
                        allowSorting={true}
                        dataBound={this.dataBound.bind(BOOKS_Data)}
                        load={this.load}
                        editSettings={this.editSettings}>
                        <ColumnsDirective>
                            <ColumnDirective headerText='' width='160' commands={this.commands}></ColumnDirective>
                            <ColumnDirective field='idBook' width="100" visible={true} headerText='idBook'></ColumnDirective>
                            <ColumnDirective field='letter' width="100" visible={true} headerText='letter'></ColumnDirective>
                            <ColumnDirective field='codBook' width="100" visible={true} headerText='codBook'></ColumnDirective>
                            <ColumnDirective field='title' width="100" visible={true} headerText='title'></ColumnDirective>
                            <ColumnDirective field='author1' width="100" visible={true} headerText='author1'></ColumnDirective>
                            <ColumnDirective field='signature' width="100" visible={true} headerText='signature'></ColumnDirective>
                            <ColumnDirective field='datePublish' width="100" visible={true} headerText='datePublish'></ColumnDirective>
                            <ColumnDirective field='editorial1' width="100" visible={true} headerText='editorial1'></ColumnDirective>
                            <ColumnDirective field='numCopies' width="100" visible={true} headerText='numCopies'></ColumnDirective>
                            <ColumnDirective field='isbn' width="100" visible={true} headerText='isbn'></ColumnDirective>
                            <ColumnDirective field='typeMedia' width="100" visible={true} headerText='typeMedia'></ColumnDirective>
                            <ColumnDirective field='idiom' width="100" visible={true} headerText='idiom'></ColumnDirective>
                            <ColumnDirective field='pagesBooks' width="100" visible={true} headerText='pagesBooks'></ColumnDirective>
                            <ColumnDirective field='assessment' width="100" visible={true} headerText='assessment'></ColumnDirective>
                            <ColumnDirective field='category' width="100" visible={true} headerText='category'></ColumnDirective>
                            <ColumnDirective field='sinopsis' width="100" visible={true} headerText='sinopsis'></ColumnDirective>
                            <ColumnDirective field='location' width="100" visible={true} headerText='location'></ColumnDirective>
                            <ColumnDirective field='formatDigital' width="100" visible={true} headerText='formatDigital'></ColumnDirective>
                            <ColumnDirective field='theme1' width="100" visible={true} headerText='theme1' ></ColumnDirective>
                            <ColumnDirective field='genre1' width="100" visible={true} headerText='genre1' ></ColumnDirective>
                            <ColumnDirective field='dtlSerie' width="100" visible={true} headerText='dtlSerie' ></ColumnDirective>
                            <ColumnDirective field='dtlEdition' width="100" visible={true} headerText='dtlEdition' ></ColumnDirective>
                            <ColumnDirective field='dtlPrintBy' width="100" visible={true} headerText='dtlPrintBy' ></ColumnDirective>
                            <ColumnDirective field='dtlDimensionsHigh' width="100" visible={true} headerText='dtlDimensionsHigh' ></ColumnDirective>
                            <ColumnDirective field='dtlDimensionsWidth' width="100" visible={true} headerText='dtlDimensionsWidth' ></ColumnDirective>
                            <ColumnDirective field='dtlweight' width="100" visible={true} headerText='dtlweight' ></ColumnDirective>
                            <ColumnDirective field='fNotes1' width="100" visible={true} headerText='fNotes1' ></ColumnDirective>
                            <ColumnDirective field='imgCoverPag' width="100" visible={true} headerText='imgCoverPag' ></ColumnDirective>
                            <ColumnDirective field='imgBackCover' width="100" visible={true} headerText='imgBackCover' ></ColumnDirective>
                            <ColumnDirective field='keyWord' width="100" visible={true} headerText='keyWord' >  </ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[Page, Group, Sort, Edit, CommandColumn]} />
                    </GridComponent>
                </div>
            </div>);
    }
}