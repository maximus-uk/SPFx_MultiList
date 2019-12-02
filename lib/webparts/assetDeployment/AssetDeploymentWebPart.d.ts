import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
export interface IAssetDeploymentWebPartProps {
    description: string;
}
export default class AssetDeploymentWebPart extends BaseClientSideWebPart<IAssetDeploymentWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=AssetDeploymentWebPart.d.ts.map