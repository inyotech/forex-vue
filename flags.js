import as from './images/flags/as-t.gif'
import br from './images/flags/br-t.gif'
import ca from './images/flags/ca-t.gif'
import ce from './images/flags/ce-t.gif'
import ch from './images/flags/ch-t.gif'
import da from './images/flags/da-t.gif'
import eu from './images/flags/eu.gif'
import hk from './images/flags/hk.gif'
import in_ from './images/flags/in-t.gif'
import ja from './images/flags/ja-t.gif'
import ks from './images/flags/ks-t.gif'
import mx from './images/flags/mx-t.gif'
import my from './images/flags/my-t.gif'
import no from './images/flags/no-t.gif'
import nz from './images/flags/nz-t.gif'
import sf from './images/flags/sf-t.gif'
import sn from './images/flags/sn-t.gif'
import sw from './images/flags/sw-t.gif'
import sz from './images/flags/sz-t.gif'
import th from './images/flags/th-t.gif'
import tw from './images/flags/tw-t.gif'
import uk from './images/flags/uk-t.gif'
import us from './images/flags/us-t.gif'
import ve from './images/flags/ve-t.gif'

const flagImages = {
    'as': as,
    'br': br,
    'ca': ca,
    'ce': ce,
    'ch': ch,
    'da': da,
    'eu': eu,
    'hk': hk,
    'in': in_,
    'ja': ja,
    'ks': ks,
    'mx': mx,
    'my': my,
    'no': no,
    'nz': nz,
    'sf': sf,
    'sn': sn,
    'sw': sw,
    'sz': sz,
    'th': th,
    'tw': tw,
    'uk': uk,
    'us': us,
    've': ve,
};

export function getFlag(fileName) {
    const name = fileName.split(/[-\\.]/)[0]
    return flagImages[name]
}
