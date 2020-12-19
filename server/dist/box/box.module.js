"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const box_controller_1 = require("./box.controller");
const box_service_1 = require("./box.service");
const box_schema_1 = require("./schemas/box.schema");
let BoxModule = class BoxModule {
};
BoxModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: box_schema_1.BoxClass.name, schema: box_schema_1.BoxSchema },
            ]),
        ],
        controllers: [box_controller_1.BoxController],
        providers: [box_service_1.BoxService],
    })
], BoxModule);
exports.BoxModule = BoxModule;
//# sourceMappingURL=box.module.js.map