import { travelScenarios } from './travel';
import { techScenarios } from './pack_tech';
import { chaosScenarios } from './pack_chaos';
import { packAlphaScenarios } from './pack_alpha';
import { packBravoScenarios } from './pack_bravo';
import { packCharlieScenarios } from './pack_charlie';
import { packDeltaScenarios } from './pack_delta';
import { packEchoScenarios } from './pack_echo';
import { packFoxtrotScenarios } from './pack_foxtrot';
import { packGolfScenarios } from './pack_golf';
import { packHotelScenarios } from './pack_hotel';
import { packIndiaScenarios } from './pack_india';
import { packJulietScenarios } from './pack_juliet';
import { packKiloScenarios } from './pack_kilo';
import { packLimaScenarios } from './pack_lima';
import { packMikeScenarios } from './pack_mike';
import { packNovemberScenarios } from './pack_november';
import { packOscarScenarios } from './pack_oscar';
import { packPapaScenarios } from './pack_papa';
import { packQuebecScenarios } from './pack_quebec';
import { packRomeoScenarios } from './pack_romeo';
import { packSierraScenarios } from './pack_sierra';
import { packTangoScenarios } from './pack_tango';
import { packUniformScenarios } from './pack_uniform';
import { packVictorScenarios } from './pack_victor';
import { packWhiskeyScenarios } from './pack_whiskey';
import { packXrayScenarios } from './pack_xray';
import { packYankeeScenarios } from './pack_yankee';
import { packZuluScenarios } from './pack_zulu';
import { packAlphaTwoScenarios } from './pack_alpha_two';
import { packBravoTwoScenarios } from './pack_bravo_two';
import { packCharlieTwoScenarios } from './pack_charlie_two';
import { packDeltaTwoScenarios } from './pack_delta_two';
import { packEchoTwoScenarios } from './pack_echo_two';
import { packFoxtrotTwoScenarios } from './pack_foxtrot_two';
import { packGolfTwoScenarios } from './pack_golf_two';
import { packHotelTwoScenarios } from './pack_hotel_two';
import { packIndiaTwoScenarios } from './pack_india_two';
import { packJulietTwoScenarios } from './pack_juliet_two';
import { packKiloTwoScenarios } from './pack_kilo_two';
import { packLimaTwoScenarios } from './pack_lima_two';
import { packMikeTwoScenarios } from './pack_mike_two';
import { packNovemberTwoScenarios } from './pack_november_two';
import { packOscarTwoScenarios } from './pack_oscar_two';
import { packPapaTwoScenarios } from './pack_papa_two';
import { packQuebecTwoScenarios } from './pack_quebec_two';
import { packRomeoTwoScenarios } from './pack_romeo_two';
import { packSierraTwoScenarios } from './pack_sierra_two';
import { packTangoTwoScenarios } from './pack_tango_two';
import { packUniformTwoScenarios } from './pack_uniform_two';
import { packVictorTwoScenarios } from './pack_victor_two';
import { packWhiskeyTwoScenarios } from './pack_whiskey_two';
import { packXrayTwoScenarios } from './pack_xray_two';
import { packYankeeTwoScenarios } from './pack_yankee_two';
import { packZuluTwoScenarios } from './pack_zulu_two';
import { packAlphaThreeScenarios } from './pack_alpha_three';
import { packBravoThreeScenarios } from './pack_bravo_three';
import { packCharlieThreeScenarios } from './pack_charlie_three';
import { packDeltaThreeScenarios } from './pack_delta_three';
import { packEchoThreeScenarios } from './pack_echo_three';
import { packFoxtrotThreeScenarios } from './pack_foxtrot_three';
import { packGolfThreeScenarios } from './pack_golf_three';
import { packHotelThreeScenarios } from './pack_hotel_three';
import { packIndiaThreeScenarios } from './pack_india_three';
import { packNovemberThreeScenarios } from './pack_november_three';
import { packOscarThreeScenarios } from './pack_oscar_three';
import { packPapaThreeScenarios } from './pack_papa_three';
import { packQuebecThreeScenarios } from './pack_quebec_three';
import { packJulietThreeScenarios } from './pack_juliet_three';
import { packKiloThreeScenarios } from './pack_kilo_three';
import { packLimaThreeScenarios } from './pack_lima_three';
import { packMikeThreeScenarios } from './pack_mike_three';

export * from './types';

export const SCENARIOS = [
  ...travelScenarios, ...techScenarios, ...chaosScenarios,
  ...packAlphaScenarios, ...packBravoScenarios, ...packCharlieScenarios,
  ...packDeltaScenarios, ...packEchoScenarios, ...packFoxtrotScenarios,
  ...packGolfScenarios, ...packHotelScenarios, ...packIndiaScenarios,
  ...packJulietScenarios, ...packKiloScenarios, ...packLimaScenarios,
  ...packMikeScenarios, ...packNovemberScenarios, ...packOscarScenarios,
  ...packPapaScenarios, ...packQuebecScenarios, ...packRomeoScenarios,
  ...packSierraScenarios, ...packTangoScenarios, ...packUniformScenarios,
  ...packVictorScenarios, ...packWhiskeyScenarios, ...packXrayScenarios,
  ...packYankeeScenarios, ...packZuluScenarios, ...packAlphaTwoScenarios,
  ...packBravoTwoScenarios, ...packCharlieTwoScenarios, ...packDeltaTwoScenarios,
  ...packEchoTwoScenarios, ...packFoxtrotTwoScenarios, ...packGolfTwoScenarios,
  ...packHotelTwoScenarios, ...packIndiaTwoScenarios, ...packJulietTwoScenarios,
  ...packKiloTwoScenarios, ...packLimaTwoScenarios, ...packMikeTwoScenarios,
  ...packNovemberTwoScenarios, ...packOscarTwoScenarios, ...packPapaTwoScenarios,
  ...packQuebecTwoScenarios, ...packRomeoTwoScenarios, ...packSierraTwoScenarios,
  ...packTangoTwoScenarios, ...packUniformTwoScenarios, ...packVictorTwoScenarios,
  ...packWhiskeyTwoScenarios, ...packXrayTwoScenarios, ...packYankeeTwoScenarios,
  ...packZuluTwoScenarios, ...packAlphaThreeScenarios, ...packBravoThreeScenarios,
  ...packCharlieThreeScenarios, ...packDeltaThreeScenarios, ...packEchoThreeScenarios,
  ...packFoxtrotThreeScenarios, ...packGolfThreeScenarios, ...packHotelThreeScenarios,
  ...packIndiaThreeScenarios, ...packNovemberThreeScenarios, ...packOscarThreeScenarios,
  ...packPapaThreeScenarios, ...packQuebecThreeScenarios, ...packJulietThreeScenarios,
  ...packKiloThreeScenarios, ...packLimaThreeScenarios, ...packMikeThreeScenarios
];