import {BreakPoint} from '@angular/flex-layout';

export const updateBreakpoints = ((it:BreakPoint) => {
  switch(it.alias) {
    case 'lt-sm' : it.mediaQuery =  '(max-width: 740px)';   break;
  }
  return it;
});
