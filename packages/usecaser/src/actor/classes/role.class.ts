import { UsecaseSymbol } from '../../symbol/classes/usecase-symbol.class';

export class Role<Name extends string> extends UsecaseSymbol<'Role', Name> {
   readonly type = 'Role';
}
