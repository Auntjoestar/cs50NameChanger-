// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {gorm} from '../models';

export function ChangeFileNames(arg1:Array<string>,arg2:string):Promise<void>;

export function ConnectDB():Promise<gorm.DB>;

export function ListCycles():Promise<Array<string>>;

export function ListGroups():Promise<Array<string>>;

export function ListPrograms():Promise<Array<string>>;

export function ListWeeks():Promise<Array<string>>;

export function MakeNewName(arg1:string,arg2:string,arg3:string,arg4:string):Promise<string>;

export function OpenFileDialog():Promise<Array<string>>;
