import as from './assets/images/flags/as-t.gif'
import br from './assets/images/flags/br-t.gif'
import ca from './assets/images/flags/ca-t.gif'
import ce from './assets/images/flags/ce-t.gif'
import ch from './assets/images/flags/ch-t.gif'
import da from './assets/images/flags/da-t.gif'
import eu from './assets/images/flags/eu.gif'
import hk from './assets/images/flags/hk.gif'
import in_ from './assets/images/flags/in-t.gif'
import ja from './assets/images/flags/ja-t.gif'
import ks from './assets/images/flags/ks-t.gif'
import mx from './assets/images/flags/mx-t.gif'
import my from './assets/images/flags/my-t.gif'
import no from './assets/images/flags/no-t.gif'
import nz from './assets/images/flags/nz-t.gif'
import sf from './assets/images/flags/sf-t.gif'
import sn from './assets/images/flags/sn-t.gif'
import sw from './assets/images/flags/sw-t.gif'
import sz from './assets/images/flags/sz-t.gif'
import th from './assets/images/flags/th-t.gif'
import tw from './assets/images/flags/tw-t.gif'
import uk from './assets/images/flags/uk-t.gif'
import us from './assets/images/flags/us-t.gif'
import ve from './assets/images/flags/ve-t.gif'

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
