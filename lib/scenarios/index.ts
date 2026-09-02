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

export * from './types';

// Central command hub: combine all modular FOBs into the main arsenal
export const SCENARIOS = [
  ...travelScenarios,
  ...techScenarios,
  ...chaosScenarios,
  ...packAlphaScenarios,
  ...packBravoScenarios,
  ...packCharlieScenarios,
  ...packDeltaScenarios,
  ...packEchoScenarios,
  ...packFoxtrotScenarios,
  ...packGolfScenarios,
  ...packHotelScenarios,
  ...packIndiaScenarios,
  ...packJulietScenarios,
  ...packKiloScenarios,
  ...packLimaScenarios,
  ...packMikeScenarios,
  ...packNovemberScenarios,
  ...packOscarScenarios,
  ...packPapaScenarios,
  ...packQuebecScenarios,
  ...packRomeoScenarios,
  ...packSierraScenarios,
  ...packTangoScenarios,
  ...packUniformScenarios,
  ...packVictorScenarios
];