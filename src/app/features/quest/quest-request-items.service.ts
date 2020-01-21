import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { QuestHandlerService } from './quest-handler.service';
import { QueryService } from '@keira-shared/services/query.service';
import { SingleRowEditorService } from '@keira-abstract/service/editors/single-row-editor.service';
import {
  QUEST_REQUEST_ITEMS_ID,
  QUEST_REQUEST_ITEMS_TABLE,
  QuestRequestItems
} from '@keira-types/quest-request-items.type';

@Injectable({
  providedIn: 'root'
})
export class QuestRequestItemsService extends SingleRowEditorService<QuestRequestItems> {

  /* istanbul ignore next */ // because of: https://github.com/gotwarlost/istanbul/issues/690
  constructor(
    protected handlerService: QuestHandlerService,
    protected queryService: QueryService,
    protected toastrService: ToastrService,
  ) {
    super(
      QuestRequestItems,
      QUEST_REQUEST_ITEMS_TABLE,
      QUEST_REQUEST_ITEMS_ID,
      null,
      false,
      handlerService,
      queryService,
      toastrService,
    );
  }
}